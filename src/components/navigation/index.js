import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navigation = () => {

    // data-bs-theme="blue"
    return(
        <nav>

            <div>
                <div className="container">
                    <h3>Filip Niklas</h3>
                </div>
            </div>

            <div className="navbar navbar-expand-lg">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    to="/"
                                    className="nav-link"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    to="/projects"
                                    className="nav-link"
                                >
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
};

export default Navigation;