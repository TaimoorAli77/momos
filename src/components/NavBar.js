import React from 'react';
import logo1 from '../images/logo1.jpg'
import { Link, useLocation } from "react-router-dom";
import Button from './Button';
const NavBar = () => {
    const location = useLocation();
    console.log(location);
    return (
            <nav className="navbar navbar-expand-lg bg-white ">
                    <Link to="/">  <img className='logoImg' src={logo1} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand " style={{ color: location.pathname === '/' ? 'red' : 'black' }} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand" style={{ color: location.pathname === '/who' ? 'red' : 'black' }} to="/who">Who we are</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navbar-brand' style={{ color: location.pathname === '/food' ? 'red' : 'black' }} to="/food">our Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`navbar-brand location.pathname=== '/menu'? 'active':''`} style={{ color: location.pathname === '/menu' ? 'red' : 'black' }} to="/menu">menu</Link>
                            </li>
                        </ul>
                        <form className="d-flex mb-1" role="search">
                            <Button btn="ORDER NOW"/>
                        </form>
                    </div>
            </nav>
    );
}

export default NavBar;
