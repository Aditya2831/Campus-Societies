import Welcome from './Pages/Welcome'
import './App.css'
import TechSocieties from './Pages/TechSocieties'
import CulturalSocieties from './Pages/CulturalSocieties'
import Communities from './Pages/Communities'
import Society_Structure from './Components/Society_Structure'
import { Route, Routes } from 'react-router-dom';
// import { Authentication } from './Authentication'
import UserForm from './Components/Userform'
// import {supabase} from './client'
// import { createClient } from "@supabase/supabase-js";


// const supabase = createClient("https://fcbyrfhpsxveworvwzep.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYnlyZmhwc3h2ZXdvcnZ3emVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjE0NTYsImV4cCI6MjAyNTkzNzQ1Nn0.vkxkszcZ8RJYz91qhIJ8oFi6W6gzhNDbCwp_t_S4Qbc");

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/x" element={<UserForm/>} />
    <Route path="/technical" element={<TechSocieties />} />
    <Route path="/cultural" element={<CulturalSocieties/>} />
    <Route path="/communities" element={<Communities/>} />
    </Routes>
    </>
  )
}

export default App
