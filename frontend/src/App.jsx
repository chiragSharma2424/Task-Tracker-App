import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import TaskTracker from './components/TaskTracker';
import HomePage from './components/HomePage';
import Appbar from './components/Appbar';

function App() {
  return (
    <div>
      <Appbar />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/task' element={<TaskTracker />} />
       </Routes>
    </div>
  )
}

export default App;