import React from 'react'

function DashboardPage() {
  return (
    <div>
        <h1>Dashboard Page</h1>
        <div id='dashboard'> 
        <div id='daily-todo'>
          <h2>Daily To-Do</h2>
          <div className="daily-todo-task">
            <h3>Task #1</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Find a badass job.</p>
          </div>
          <div className='daily-todo-task-2'>
            <h3>Task #2</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Find a badass job.</p>
          </div>
          <div className='daily-todo-task-2'>
            <h3>Task #3</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Find a badass job.</p>
          </div>
        </div>
        <div id='friends-todo'>
          <h2>Friends Overview</h2>
          <div className="daily-todo-task">
            <h3>Friends Task #1</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Learn playing guitar</p>
          </div>
          <div className='daily-todo-task-2'>
            <h3>Friends Task #2</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Learn playing guitar</p>
          </div>
          <div className='daily-todo-task-2'>
            <h3>Friends Task #3</h3>
            <p><b>Deadline: </b> 20.12.2023</p>
            <p><b>Description: </b> 
            Learn playing guitar</p>
          </div>
        </div>
        </div>

    </div>
  )
}

export default DashboardPage;