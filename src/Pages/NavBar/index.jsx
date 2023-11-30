import { Link } from "react-router-dom";
import userProfileImage from "/src/assets/user-profile-image.png"; // Adjust the path accordingly

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        <p>Accountable.me</p>
      </Link>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          <p>Login</p>
        </Link>
        <Link to="/signup" className="navbar-link">
          <p>Signup</p>
        </Link>
        <Link to="/user-profile" className="navbar-link">
          <img src={userProfileImage} alt="User Profile" className="user-image" />
        </Link>
      </div>
    </nav>
  );
}
