import React from 'react'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className="navigation">
            <div className="navigation__nav">
                <ul className="navigation__list">
                    <Link to="/">Home </Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>
        </div>
    )
}
