import '../css/header.css'

const Header = () => {
  return (
    <>
      
      <nav className='nav'>
        <div className='logo'>
          <a href="/">Brentwood<br />Group</a>
        </div>
        <ul>
            <li>
                <a href="/">Pricing</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;