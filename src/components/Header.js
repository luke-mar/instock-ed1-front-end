import logo from "../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";
import "../styles/partials/_globals.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="InStock Logo at original size"></img>
            </div>
            <nav className="header__nav"> 
                <ul className="header__navList">
                    <li className="header__navItem"><a className="header__navItemLink" href="/">Warehouses</a></li>
                    <li className="header__navItem"><a className="header__navItemLink" href="/">Inventory</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;