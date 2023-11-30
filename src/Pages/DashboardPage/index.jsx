import React, { useEffect, useState } from 'react';
import ToDoCard from '../../components/ToDoCard';
import { getAllToDo } from '../../utils/HandleApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const API_URL = 'http://localhost:5005';

const taskValues = {
  title: '',
  description: '',
  deadline: '2024-01-01',
  attachments: '',
};

function DashboardPage() {
  const [toDo, setToDo] = useState({ ...taskValues });
  const [toDoList, setToDoList] = useState([]);

  const navigate = useNavigate();

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
      .then(() => fetchData()) // Call the function here to fetch updated data
      .catch((error) => console.log(error));
  };

  return (
    <div className='container'>
      <h1>Dashboard Page</h1>
      <div className='top'>
        <form onSubmit={handleSubmit}>
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
          toDoList.map((toDo, index) => (
            <div
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
              key={toDo._id}
            >
              <div className='text'>{toDo.text}</div>
              <BiEdit className='icon' />
              <AiFillDelete
                className='icon'
                onClick={() => handleDelete(toDo._id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default DashboardPage;
