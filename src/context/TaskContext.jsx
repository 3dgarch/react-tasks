import {createContext, useState, useEffect} from 'react'

//import arreglo task
import {tasks as data} from '../task'


export const TaskContext = createContext()

export function TaskContextProvider(props) {


  const[tasks, setTasks] = useState([])


  //create task
  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  //delete task
  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  // useEffect
  useEffect(()=>{
    setTasks(data)
  }, [])


  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask,
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider