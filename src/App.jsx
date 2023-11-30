import './index.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import FriendsPage from './Pages/FriendsPage';
import SignUpPage from './Pages/SignupPage';
import UserProfilePage from './Pages/UserProfilePage';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
