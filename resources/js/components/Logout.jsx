import React, { useContext, useEffect } from 'react';
import { Button } from 'antd';
import AuthUserContext from '../contexts/AuthUserContext';
import axios from 'axios';

import { Link } from "react-router-dom";

const Logout = () => {
    const [authUser, setAuthUser] = useContext(AuthUserContext);


    const logoutHandler = async () => {
        await axios.post('/api/logout');
        localStorage.removeItem('authUser');
        setAuthUser(null);
    }

    const component = () => {
        if (authUser) {
            return (<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {authUser.name}
                </a>
                <ul className="dropdown-menu dropdown-right">
                    <li><a className="dropdown-item" onClick={logoutHandler}>Logout</a></li>
                    <li><Link className="dropdown-item" to="/admin">Admin</Link></li>
                </ul>
            </li>)
        }

        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/registration">Registration</Link>
                </li>
            </>
        );
    }

    return component();


}

export default Logout;
