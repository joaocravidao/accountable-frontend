import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'



const ToDo = ({text, deleteToDo}) => {

  return (
    <div className='todo'>
        <div className='text'>{text}</div>
    </div>
  )
}

export default ToDo;