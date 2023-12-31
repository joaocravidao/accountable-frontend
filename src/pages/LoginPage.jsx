import {useContext, useState} from 'react';
import { AuthContext } from '/src/Context/auth.context.jsx';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, FormInput, FormLabel, Text } from './LoginPageElements';

const API_URL = "https://accountable-me2.adaptable.app";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // use shared functions provided by AuthContext. Here we get the userId
    const {storeToken, authenticateUser, userId} = useContext(AuthContext);

    //When Login button is clicked we authorize using AuthContext
    const handleLoginSubmit = (e) =>{
        e.preventDefault();

        const requestBody = {email, password, userId};

        axios.post(`${API_URL}/auth/login`, requestBody)
        .then((response) => {
            storeToken(response.data.authToken);
            axios.defaults.headers['Authorization'] = `Bearer ${response.data.authToken}`;
            authenticateUser().then(() => {
                //here we put the userId into params so each user has an individual page
                if (userId) {
                    navigate(`/dashboard/${userId}`);
                }
        });
    })
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setError(errorDescription);
    });
    }
    
    return(
        <>
          <Container>
            <FormWrap>
               <Icon to='/'>accountable</Icon>
               <FormContent>
                <Form onSubmit = {handleLoginSubmit}>
                    <FormH1>Login to your account</FormH1>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput type='email' required value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <FormInput type='password' required autoComplete="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <FormButton type='submit'>Login</FormButton>
                    <Text>Forgot password?</Text>
                </Form>
                {error && <p>{error}</p>}
               </FormContent>
            </FormWrap>
          </Container> 
        </>   
    )

}

export default LoginPage