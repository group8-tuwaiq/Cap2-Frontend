import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
            <ul>
                <li>
                    <Link to="/home" className="link">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="link">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="link">Books</Link>
                </li>
                <li>
                    <Link to="/Films" className="link">Films</Link>
                </li>
                <li>
                    <Link to="/favorite" className="link">Audio</Link>
                </li>
                <li>
                <li>
                    <Link to="/favorite" className="link">favorite</Link>
                </li>
                    <Link to="/login" className="link">login</Link>
                </li>
                <li>
                    <Link to="/signup" className="link">sign-up</Link>
                </li>
            </ul>
    )
}
export default Navbar;