import './Header.css'

function Header(){
    return (
    <>
    <div className='header-wrapper'>
    <div className='header-item'>
    <h1 id='nav-title'> FinForum </h1>
    </div>
    <div className='nav-bar'>
    <ul>
        <li className='nav-item'><a href="">My Budgets</a></li>
        <li className='nav-item'><a href="">Explore Posts</a></li>
        <li className='nav-item'><a href ="">Login or Sign up</a></li>
    </ul>
    </div>
    </div>
    </>
    )
}

export default Header