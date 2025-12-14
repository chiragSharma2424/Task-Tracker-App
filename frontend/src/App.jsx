import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
       </Routes>
    </div>
  )
}

export default App;