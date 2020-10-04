import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="Navbar">
                <nav className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Technology For Social Good <i className='fab fa-typo3'></i>/>
                    </Link>
                </nav>
            </nav>        
        </>
    )
}

export default Navbar
