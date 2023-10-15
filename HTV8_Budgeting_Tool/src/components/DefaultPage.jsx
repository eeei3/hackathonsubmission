import './DefaultPage.css';
import { Link } from 'react-router-dom';

function DefaultPage(){
    return(
        <>
            <div className='welcome-message'>
            <span id="welcome-header">
            <h1>Welcome to FinForums</h1>
            </span>
            <h2>To get started <br/> <Link to='/RegistrationPage'>sign up or login here</Link></h2>
            </div>
        </>
    )
}

export default DefaultPage