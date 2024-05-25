import Welcome from './Pages/Welcome'
import './App.css'
import TechSocieties from './Pages/TechSocieties'
import CulturalSocieties from './Pages/CulturalSocieties'
import Communities from './Pages/Communities'
import Society_Structure from './Components/Society_Structure'
import { Route, Routes } from 'react-router-dom';
// import GoogleAuth from './Components/TempComponent'
// import { Authentication } from './Authentication'
import UserForm from './Components/Userform'


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/x" element={<UserForm/>} />
    <Route path="/technical" element={<TechSocieties/>} />
    <Route path="/cultural" element={<CulturalSocieties/>} />
    <Route path="/communities" element={<Communities/>} />
    </Routes>
    </>
  )
}

export default App
