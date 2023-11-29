import React, { useEffect, useState } from 'react'
import ToDo from '../../components/ToDo';
import { getAllToDo } from '../../utils/HandleApi';


function DashboardPage() {

	const [toDo, setToDo] = useState([])

	//useEffect(() => {
		//getAllToDo(setToDo)
	//}, [])

  return (
    <div className='container'>
        <h1>Dashboard Page</h1>
		<div className='top'>
			<input type='text' placeholder='add to-dos...'/>
				<div className='add'>Add</div>
		</div>
		<div className="list">

			{toDo.map((item) => <ToDo key={item._id} text={item.text} />)}

		</div>
    </div>
  )
}

export default DashboardPage;