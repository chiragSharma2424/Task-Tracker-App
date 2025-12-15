import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import TaskTracker from './components/TaskTracker';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/task' element={<TaskTracker />} />
       </Routes>
    </div>
  )
}

export default App;