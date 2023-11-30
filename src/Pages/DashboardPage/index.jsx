import React, { useEffect, useState } from 'react'
import ToDoCard from "../../components/ToDoCard"
import { getAllToDo } from '../../utils/HandleApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";

const taskValues = {
  title: "",
  description: "",
  deadline: "2024-01-01",
  attachments: "", 
}

function DashboardPage() {

	const [toDo, setToDo] = useState({...taskValues})
  const [toDoList, setToDoList] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;  //still need to determine this! 

    setToDo((prevToDo)=>({ //this too! 
      ...prevToDo,
      [name]: value,
    }))
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/api/tasks`)
      .then((response) => {
        setToDoList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const getAllToDo = () => {
    axios
      .get(`${API_URL}/api/tasks`)
      .then((response) => {
        setToDoList(response.data);
      })
      .catch((error) => console.log(error));
  };

  getAllToDo()

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      ...toDo,
    }
  
    axios
    .post(`${API_URL}/api/task`, requestBody)
    .then((response)=>{
      const newToDo = response.data;
  
      /* navigate(`/tasks/${newToDo._id}`) */
    })
    .catch((error)=> console.log(error));
  }



  return (
    <div className='container'>
      <h1>Dashboard Page</h1>
      <div className='top'>
        <form
        onSubmit={handleSubmit}>
          <h3>Create Task</h3>
        <input type="text" name="title" value={toDo.title} onChange={handleChange} placeholder='title'></input>
        <input type="text" name="description" value={toDo.description} onChange={handleChange} placeholder='description'></input>
        <input type="date" name="deadline" value={toDo.deadline} onChange={handleChange} placeholder='deadline'></input>
        <input type="text" name="attachments" value={toDo.attachments} onChange={handleChange} placeholder='attachments'></input>
        <button
          type="submit"
        >
          Create ToDo
        </button>
        </form>
        {toDoList &&
        toDoList.map(
          (toDo, index) => (
              <ToDoCard
                key={toDo._id}
                {...toDo}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              />
          )
        )}
      </div>
    </div>
  );
}

export default DashboardPage;