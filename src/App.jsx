// import taskList
import TaskList from './components/TaskList'

//import taskForm
import TaskForm from './components/TaskForm'



//import usestate,useEffect
//import {useState, useEffect} from 'react'



// function App()
function App() {


  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10 ">

       <TaskForm />
       <TaskList />
      </div>
    </main>
  )
}

export default App