/* eslint-disable react/prop-types */

// import useContext
import {useContext} from 'react'

//import taskContent
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {
  /* 
   function mostrarAlerta(){
    alert(props.task.id)
   }
  */

   // ejecuto useContext
   const {deleteTask} = useContext(TaskContext)
   


  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 mt-4 hover:bg-red-400 rounded-md'onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;
