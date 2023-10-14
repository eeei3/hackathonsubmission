import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import TextField  from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {auth} from '../firebase-config'
import { useState } from 'react'
import './RegistrationPage.css'

function RegistrationPage() {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        }
        catch(error){
            console.log(error.message);
        }
    };

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        }
        catch(error){
            console.log(error.message);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }






    return (
        <>
            <div className='tabs-wrapper' id='info-header'>
                <h1>What is FinForums?</h1>
                <p> FinForums is a platform for developping your finanical goals! Create your budget, and <br /> share it with others on our forum platform to get feedback and
                    answer your budget questions.
                </p>
            </div>
            <div className='tabs-wrapper'>
                <h1>Join FinForums Today!</h1>
                <Box sx={{ width: 600, backgroundColor: '#F9F5F4', }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
                            <TabList aria-label='Tabs Example' onChange={handleChange}>
                                <Tab label='Register' value='1'></Tab>
                                <Tab label='Sign in' value='2'></Tab>
                            </TabList>
                        </Box>
                        <TabPanel value='1'>
                            <h3 id='bottom-bordered-text'>Register to continue</h3>
                            <Box className='form-items' sx={{ display: 'flex', columnGap: '1em', flexWrap: 'wrap'}}>
                            <TextField id='register-firstname' label='First name' variant='standard' margin="normal" />
                            <TextField id='register-lastname' label='Last name' variant='standard' margin="normal" />
                            <TextField id='register-username' label='Username' variant='standard' margin="normal" />
                            <TextField id='register-email' onChange={(event) => {setRegisterEmail(event.target.value)}} label='Email' variant='standard' margin="normal" />
                            <TextField type='password' onChange={(event) => {setRegisterPassword(event.target.value)}} id='register-password' label='Password' variant='standard' margin="normal" />
                            </Box>
                            <Button onClick={register} sx={{marginBottom: '1vw', marginRight: '5px', float: 'right'}} variant="outlined">Submit</Button>
                        </TabPanel>
                        <TabPanel value='2'>
                            <h3 id='bottom-bordered-text'>Sign in to continue</h3>
                            <Box className='form-items' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', columnGap: '1em', flexWrap: 'wrap'}}>
                            <TextField id='signin-username' onChange={(event) => {setLoginEmail(event.target.value)}} label='Username' variant='standard' margin="normal" />
                            <TextField type='password' onChange={(event) => {setLoginPassword(event.target.value)}} id='login-password' label='Password' variant='standard' margin="normal" />
                            </Box>
                            <Button onClick={login} sx={{marginBottom: '1vw', marginRight: '5px', float: 'right'}} variant="outlined">Submit</Button>
                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    )
}

export default RegistrationPage