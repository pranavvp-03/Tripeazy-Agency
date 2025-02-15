import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './accounts/Signup'
import Signin from './accounts/Signin'

function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
   
  )
}

export default App
