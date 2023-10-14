import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import TextField  from '@mui/material/TextField'
import { useState } from 'react'
import './RegistrationPage.css'



function RegistrationPage() {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
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
                            <TextField id='register-email' label='Email' variant='standard' margin="normal" />
                            <TextField id='register-password' label='Password' variant='standard' margin="normal" />
                            </Box>
                        </TabPanel>
                        <TabPanel value='2'>
                            <h3 id='bottom-bordered-text'>Sign in to continue</h3>

                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    )
}

export default RegistrationPage