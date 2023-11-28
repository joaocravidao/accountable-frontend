import './index.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'
import FriendsPage from './Pages/FriendsPage'
import SignupPage from './Pages/SignupPage'

function App() {
  return (
    <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardPage />} />
          <Route path="/friends" element={<FriendsPage/>}/>
          <Route path="/signup" element={<SignupPage />} />
       </Routes>
  )
}

export default App
