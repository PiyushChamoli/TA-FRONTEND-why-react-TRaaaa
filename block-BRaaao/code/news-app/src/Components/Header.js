function Header(props) {
    return (
        <header className='header'>
        <div className='container flex'>
            <h2>News App</h2>
            <ul className='header-nav flex'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        </header>
    )
}

export default Header;