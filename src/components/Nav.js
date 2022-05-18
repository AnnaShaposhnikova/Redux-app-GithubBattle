import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    const navLinks = ["Home", "Popular", "Battle"];
    return (
        <nav className="nav">
            <ul className="nav-row">
                {navLinks.map((link, index) => (
                    <li className="nav-item" key={index}>
                        <NavLink
                            exact
                            activeClassName="active"
                            to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                        >
                            {link}
                        </NavLink>
                    </li>
                ))}         
            </ul>
        </nav>
    );
};
