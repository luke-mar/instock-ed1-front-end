import { Link } from "react-router-dom";
import logo from "../../assets/Logo/InStock-Logo.svg";
import "./Header.scss";
import "../../styles/partials/_globals.scss";

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to={"/"}>
                    <img src={logo} alt="InStock Logo at original size"></img>
                </Link>
            </div>
            <nav className="header__nav">
                <Link className="header__navItemLink" to={"/"}>Warehouses</Link>
                <Link className="header__navItemLink" to={"/inventories"}>Inventory</Link>
            </nav>
        </header>
    )
}

export default Header;