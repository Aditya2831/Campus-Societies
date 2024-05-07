import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
// import { Auth } from '@supabase/auth-ui-react'
// import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://fcbyrfhpsxveworvwzep.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjYnlyZmhwc3h2ZXdvcnZ3emVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAzNjE0NTYsImV4cCI6MjAyNTkzNzQ1Nn0.vkxkszcZ8RJYz91qhIJ8oFi6W6gzhNDbCwp_t_S4Qbc')


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </React.StrictMode>,
)



