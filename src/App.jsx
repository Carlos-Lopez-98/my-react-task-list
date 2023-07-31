import { Titulo } from './Components/Header'
import TaskList from './Components/TaskList'
import Task from './Components/Task'
import './App.css'

function App() {

  /*const [tasks, setTasks] = useState ([
          { 
            id: 1, 
            name: 'Practicar React'
          },
          {
            id: "2",
            name: "Estudiar"
          },
          {
             id: "3",
            name: "Ir al Banco"
          },
  ])*/
  return (
   <>
      <div>
        <Titulo />
        <TaskList />
        <Task />
      </div>
    </>
  )
}

export default App
