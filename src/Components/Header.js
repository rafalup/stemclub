import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "./../assets/x.svg";
import { ReactComponent as MenuIcon } from "./../assets/menu.svg";
import { ReactComponent as Logo } from "./../assets/logo.svg";

import "./../css/style.css";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (

        <div className="header">
            <div className="logo-nav">
                <div className="logo-container">

                    <Link to="/"> <Logo className="logo" /></Link>

                </div>
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/">HOME</Link>


                    </li>

                    <li className="options" onClick={closeMobileMenu}>
                        <Link to="/About">ABOUT</Link>

                    </li>

                </ul>
            </div>


            {/* responsivo */}

            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (

                    <MenuIcon className="menu-icon" />

                )}
            </div>

        </div>

    )

}

export default Header;