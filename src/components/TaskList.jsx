/* eslint-disable react/prop-types */

// import taskCard
import TaskCard from './TaskCard'

// import useContext desde react
import {useContext} from 'react'

// import taskContext
import {TaskContext} from '../context/TaskContext'

// function taskList
function TaskList() {
  
  const {tasks } = useContext(TaskContext)


  // validar si lista de tareas esta vacia
  if( tasks.length === 0){
    return <h1 className='text-white text-4xl font-bold text-center '>No hay tareas aun</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) =>(
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TaskList;