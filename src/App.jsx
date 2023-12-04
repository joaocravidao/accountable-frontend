import '/src/App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '/src/pages/LoginPage';
import DashboardPage from '/src/pages/DashboardPage';
import HomePage from '/src/pages/HomePage';
import SignUpPage from '/src/pages/SignupPage';
import UserProfilePage from '/src/pages/UserProfilePage';
import IsPrivate from './components/isPrivate';
import IsAnon from './components/isAnon';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/:userId" element={<IsPrivate><DashboardPage /></IsPrivate>} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route path="/user-profile/:userId" element={<IsPrivate><UserProfilePage /></IsPrivate>} />
      </Routes>
    </>
  );
}

export default App;
