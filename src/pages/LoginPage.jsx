import {useContext, useState} from 'react';
import { AuthContext } from '/src/Context/auth.context.jsx';
import axios from 'axios';
import Navbar from '../components/Navbar/NavBar';

import {useNavigate} from 'react-router-dom';

const API_URL = "http://localhost:5005";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // use shared functions provided by AuthContext 
    const {storeToken, authenticateUser, userId} = useContext(AuthContext);
    console.log(userId)

    const handleLoginSubmit = (e) =>{
        e.preventDefault();

        const requestBody = {email, password};

        axios.post(`${API_URL}/auth/login`, requestBody)
            .then((response)=>{
                storeToken(response.data.authToken);
                axios.defaults.headers['Authorization'] = `Bearer ${response.data.authToken}`;
                authenticateUser().then(()=>{
                    if (userId){
                        navigate(`/dashboard/${userId}`);
                    }
                })
              
            })
            .catch((error)=>{
                const errorDescription = error.response.data.message; 
                setError(errorDescription);
            })
    }
    
    return(
           <div className='main-login-container'>
           <div className='login-container'>
                <form onSubmit = {handleLoginSubmit}>
                    <div> 
                        <input placeholder='Email' type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <input placeholder='Password' type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    {error && <p>{error}</p>}
                </form>
            </div> 
        </div>   
    )

}

export default LoginPage