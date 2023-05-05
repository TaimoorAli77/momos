import React from 'react';
import logo1 from '../images/logo1.jpg'
import { Link, useLocation } from "react-router-dom";
// import Button from './Button';
import { HashLink } from 'react-router-hash-link';
// import Menu from './menu/Menu';
const NavBar = (props) => {
    const location = useLocation();
    console.log(location);
    return (
        <nav className="navbar navbar-expand-lg bg-white ">
            <Link to="/">  <img className='logoImg' src={logo1} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
                    <li className="nav-item ">
                        <Link className="navbar-brand " style={{ color: location.hash === '#home' || (location.pathname === '/' && !location.hash) ? '#9f1b32' : 'black' }}
                            aria-current="page" smooth="true" to="/">{props.home}</Link>
                    </li>
                    <li className="nav-item">
                        <HashLink className="navbar-brand" style={{ color: location.hash === '#who' ? '#9f1b32' : 'black' }} smooth="true" to="/#who">{props.who}</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className='navbar-brand' style={{ color: location.hash === '#food' ? '#9f1b32' : 'black' }} smooth="true" to="/#food">{props.food}</HashLink>
                    </li>
                    <li className="nav-item">
                        <Link className='navbar-brand' style={{ color: location.pathname === '/menu' ? '#9f1b32' : 'black' }} to="/menu">{props.menu}</Link>
                    </li>

                </ul>
                <form className="d-flex mb-1" role="search">
                    <HashLink className='btn btn-danger' smooth="true" to="/#order" >{props.order}</HashLink>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;
