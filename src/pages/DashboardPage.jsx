import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const API_URL = 'https://accountable-me2.adaptable.app';

const taskValues = {
  title: '',
  description: '',
  deadline: Date(),
  attachments: '',
};

function DashboardPage() {
  const [toDo, setToDo] = useState({ ...taskValues });
  const [toDoList, setToDoList] = useState([]);
  let { userId } = useParams();
  console.log(userId);

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
      .get(`${API_URL}/api/tasks/${userId}`)
      .then((response) => {
        const tasks = response.data.filter((task) => task.user.includes(userId));
        setToDoList(tasks);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmitEdit = (e, taskId) => {
    e.preventDefault();
    const updatedTask = toDoList.find((task) => task._id === taskId);

    axios
      .put(`${API_URL}/api/tasks/${userId}/${taskId}`, updatedTask)
      .then(() => {
        fetchData();
        toggleEditMode(taskId);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e, userId) => {
    e.preventDefault();
    const requestBody = { ...toDo, user: userId };

    axios
      .post(`${API_URL}/api/task/${userId}`, requestBody)
      .then(() => {
        fetchData();
        setToDo({ ...taskValues });
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (taskId) => {
    axios
      .delete(`${API_URL}/api/tasks/${userId}/${taskId}`)
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

  return (
    <>
      <div className='dashboard-title'>
        <p>My Dashboard</p>
      </div>
      <div className='dashboard-container'>
        <div className='dashboard-body'>
          <div className='top'>
            <p className='board-title'>Create Task</p>
            <div className='form-input-container'>
              <form onSubmit={(e) => handleSubmit(e, userId)}>
                <label htmlFor='title'>Title:</label>
                <input
                  type='text'
                  name='title'
                  value={toDo.title}
                  onChange={handleChange}
                  placeholder='enter title here'
                  className='title-input'
                />
                <label htmlFor='description'>Description:</label>
                <input
                  type='text'
                  name='description'
                  value={toDo.description}
                  onChange={handleChange}
                  placeholder='add a description'
                  className='description-input'
                />
                <label htmlFor='deadline'>Deadline:</label>
                <input
                  type='date'
                  name='deadline'
                  value={toDo.deadline}
                  onChange={handleChange}
                  placeholder='choose a deadline'
                  className='deadline-input'
                />
                <label htmlFor='attachments'>Attachments:</label>
                <input
                  type='file'
                  name='attachments'
                  value={toDo.attachments}
                  onChange={handleChange}
                  placeholder='attachments'
                  className='attachments-input'
                />
                <button type='submit'>Create ToDo</button>
              </form>
            </div>

            <table className='task-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Deadline</th>
                  <th>Attachments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {toDoList.map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.attachments}</td>
                    <td>
                      {task.editMode ? (
                        <form onSubmit={(e) => handleSubmitEdit(e, task._id)}>
                          <button type='submit'>Save</button>
                        </form>
                      ) : (
                        <>
                          <BiEdit
                            className='icon'
                            onClick={() => toggleEditMode(task._id)}
                          />
                          <AiFillDelete
                            className='icon'
                            onClick={() => handleDelete(task._id)}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
