import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormButton, FormInput, FormLabel } from './SignupPageElements';

const API_URL = "https://accountable-me2.adaptable.app";

function SignUpPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    //Create a new user
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const requestBody = {email, password, name};

        axios.post(`${API_URL}/auth/signup`, requestBody)
            .then((response)=>{
                navigate('/login');
            })
            .catch((error)=>{
                const errorDescription = error.response.data.message;
                setError(errorDescription);
            })
    }

return(
        <>
          <Container>
            <FormWrap>
               <Icon to='/'>accountable</Icon>
               <FormContent>
                <Form onSubmit = {handleSignUpSubmit}>
                    <FormH1>Create an account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required autoComplete="email" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <FormLabel htmlFor='for'>Username</FormLabel>
                    <FormInput type='text' required autoComplete="username" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <FormButton type='submit'>Sign Up</FormButton>
                </Form>
                {error && <p>{error}</p>}
               </FormContent>
            </FormWrap>
          </Container> 
        </>   
    )
}

export default SignUpPage;