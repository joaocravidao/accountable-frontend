import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'

function App() {
  return (
    <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardPage/>}/>
       </Routes>
  )
}

export default App
