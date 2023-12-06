import '/src/App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '/src/pages/LoginPage';
import DashboardPage from '/src/pages/DashboardPage';
import HomePage from '/src/pages/HomePage';
import SignUpPage from '/src/pages/SignupPage';
import UserProfilePopup from '/src/pages/UserProfilePopup';
import IsPrivate from './components/isPrivate';
import IsAnon from './components/isAnon';
import NavBar from './components/Navbar/NavBar';



function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<IsAnon><HomePage /></IsAnon>} />
        <Route path="/dashboard/:userId" element={<IsPrivate><DashboardPage /></IsPrivate>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route path="/user-profile/:userId" element={<IsPrivate><UserProfilePopup /></IsPrivate>} />
      </Routes>
    </>
  );
}

export default App;
