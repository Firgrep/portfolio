import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return(
        <nav>
            <div>

            </div>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;