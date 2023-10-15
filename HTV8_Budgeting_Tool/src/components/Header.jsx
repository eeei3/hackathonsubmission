import './Header.css'
import { React } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
    <>
    <div className='header-wrapper'>
    <div className='header-item'>
    <h1 id='nav-title'> <Link to='/'> FinForums </Link> </h1>
    </div>
    <div className='nav-bar'>
    <ul>

        <li className='nav-item'><Link to='/MyBudgets'> My Budgets</Link></li>
        <li className='nav-item'><Link to='/Threads'>Explore Posts</Link></li>
        <li className='nav-item'><Link to='/RegistrationPage'>Login / Sign up</Link></li>
    </ul>
    </div>
    </div>
    </>
    )
}

export default Header;