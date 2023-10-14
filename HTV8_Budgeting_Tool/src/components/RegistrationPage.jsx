import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useState } from 'react'
import './RegistrationPage.css'


function RegistrationPage() {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <div className='tabs-wrapper'>
                <h1>Join FinForums Today!</h1>
                <Box width={600}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList aria-label='Tabs Example' onChange={handleChange}>
                                <Tab label='Register' value='1'></Tab>
                                <Tab label='Sign in' value='2'></Tab>
                            </TabList>
                        </Box>
                        <TabPanel value='1'>Register</TabPanel>
                        <TabPanel value='2'>Sign in</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </>
    )
}

export default RegistrationPage