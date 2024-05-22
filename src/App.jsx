
import { Route, Routes } from 'react-router-dom'
import './App.css'


//components
import Login from './components/Login'
import SignUp from './components/SignUp'
import About from './components/About'
//pages
import NavbarCmpnt from './Pages/Navbar'
import HomePage from './Pages/HomePage'





function App() {

  return (
    <>
    <NavbarCmpnt></NavbarCmpnt>
    <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
    </Routes>
    
     
    </>
  )
}

export default App
