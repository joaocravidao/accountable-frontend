import { Link } from "react-router-dom";

function HomePage(){
    return (
        <div>
            <h1>Welcome to Accountable.me</h1>
            <h3>Do you have an account? Click login. If not, please sign up.</h3>
            <div className="navbar-links">
                <Link to="/login" className="homepage-link">
                <p>Login</p>
                </Link>
                <Link to="/signup" className="homepage-link">
                <p>Signup</p>
                </Link>
            </div>
        </div>
        
    )
}

export default HomePage;