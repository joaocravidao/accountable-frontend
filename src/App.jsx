import '/src/App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '/src/pages/LoginPage';
import DashboardPage from '/src/pages/DashboardPage';
import HomePage from '/src/pages/HomePage';
import SignUpPage from '/src/pages/SignupPage';
import UserProfilePage from '/src/pages/UserProfilePage';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
