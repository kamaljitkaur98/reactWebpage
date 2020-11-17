import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const menuitems = [
        {
            title: 'HOME',
            link: '/'
        },
        {
            title: 'ABOUT US',
            link: '/'
        },
        {
            title: 'SERVICES',
            link: '/services'
        },
        {
            title: 'PRODUCTS',
            link: '/products'
        }
    ]
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, [])

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <MdFingerprint className="navbar-icon" onClick={closeMobileMenu} />
                        Alpha Studio
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {menuitems.map((item) => {
                            return (
                                <li className='nav-item'>
                                    <Link to={item.link} className="nav-links" onClick={closeMobileMenu}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="nav-btn">
                            {button ?
                                (
                                    <Link to='/sign-up' className="btn-link">
                                        <Button buttonStyle="btn-outline">
                                            SIGN-UP
                                    </Button>
                                    </Link>
                                ) :
                                (
                                    <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle="btn-outline" buttonSize="btn-mobile">
                                            SIGN-UP
                                    </Button>
                                    </Link>
                                )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar
