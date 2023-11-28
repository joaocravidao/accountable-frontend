import './index.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'

function App() {
  return (
    <Routes>
          <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD
          <Route path="/" element={<DashboardPage/>}/>
=======
          <Route path="/" element={<DashboardPage />} />
>>>>>>> 2c732937a4c12d63e8df581ba6e0b9f9fb6d9a34
       </Routes>
  )
}

export default App
