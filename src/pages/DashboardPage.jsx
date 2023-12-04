import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const API_URL = 'http://localhost:5005';

const taskValues = {
  title: '',
  description: '',
  deadline: Date(),
  attachments: '',
};

function DashboardPage() {
  const [toDo, setToDo] = useState({ ...taskValues });
  const [toDoList, setToDoList] = useState([]);

  const navigate = useNavigate();

  const handleChangeEdit = (e, taskId) => {
    const { name, value } = e.target;
    setToDoList((prevToDoList) => {
      const updatedList = prevToDoList.map((task) =>
        task._id === taskId ? { ...task, [name]: value } : task
      );
      return updatedList;
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToDo((prevToDo) => ({
      ...prevToDo,
      [name]: value,
    }));
  };

  const fetchData = () => {
    axios
      .get(`${API_URL}/api/tasks`)
      .then((response) => {
        setToDoList(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmitEdit = (e, taskId) => {
    console.log("task id", taskId);
    e.preventDefault();
      // If taskId exists, it means we are updating an existing task
      const updatedTask = toDoList.find((task) => task._id === taskId);
      
      axios
        .put(`${API_URL}/api/tasks/${taskId}`, updatedTask)
        .then(() => {
          fetchData();
          toggleEditMode(taskId);
        })
        .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { ...toDo };

    axios
      .post(`${API_URL}/api/task`, requestBody)
      .then((response) => {
        const newToDo = response.data;
        fetchData(); // Call the function here to fetch updated data
        // navigate(`/tasks/${newToDo._id}`);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (taskId) => {
    axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(() => fetchData())
      .catch((error) => console.log(error));
  };

  const toggleEditMode = (taskId) => {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) =>
        task._id === taskId ? { ...task, editMode: !task.editMode } : task
      )
    );
  };

/*   console.log(task._id)
 */
  return (
    <div className='container'>
      <h1>Dashboard Page</h1>
      <div className='top'>
      <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Create Task</h3>
          <input 
          type='text'
          name='title'
          value={toDo.title}
          onChange={handleChange}
          placeholder='title'
          />
          <input
            type='text'
            name='description'
            value={toDo.description}
            onChange={handleChange}
            placeholder='description'
          />
          <input
            type='date'
            name='deadline'
            value={toDo.deadline}
            onChange={handleChange}
            placeholder='deadline'
          />
          <input
            type='text'
            name='attachments'
            value={toDo.attachments}
            onChange={handleChange}
            placeholder='attachments'
          />
          <button type='submit'>Create ToDo</button>
        </form>
        {toDoList &&
          toDoList.map((task, index) => (
            <div
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              key={task._id}
            >
              {task.editMode ? (
                <form onSubmit={(e) => handleSubmitEdit(e, task._id)}>
                  <input
                    type='text'
                    name='title'
                    value={task.title}
                    onChange={(e) => handleChangeEdit(e, task._id)}
                    placeholder='title'
                  />
                  <input
                    type='text'
                    name='description'
                    value={task.description}
                    onChange={(e) => handleChangeEdit(e, task._id)}
                    placeholder='description'
                  />
                  <input
                    type='date'
                    name='deadline'
                    value={task.deadline}
                    onChange={(e) => handleChangeEdit(e, task._id)}
                    placeholder='deadline'
                  />
                  <input
                    type='text'
                    name='attachments'
                    value={task.attachments}
                    onChange={(e) => handleChangeEdit(e, task._id)}
                    placeholder='attachments'
                  />
                  <button type='submit'>Save</button>
                </form>
              ) : (
                <div className='text'>
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                  <p>{task.deadline}</p>
                  {task.attachments}
                </div>
              )}
              <BiEdit
                className='icon'
                onClick={() => toggleEditMode(task._id)}
              />
              <AiFillDelete
                className='icon'
                onClick={() => handleDelete(task._id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default DashboardPage;