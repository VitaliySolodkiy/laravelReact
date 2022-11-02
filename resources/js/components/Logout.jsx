import React, { useContext } from 'react';
import { Button } from 'antd';
import AuthUserContext from '../contexts/AuthUserContext';
import axios from 'axios';

const Logout = () => {
    const [authUser, setAuthUser] = useContext(AuthUserContext);

    const logoutHandler = async () => {
        await axios.post('/api/logout');
        localStorage.removeItem('authUser');
        setAuthUser(null);
    }

    return (
        <div>
            {authUser.name} <Button onClick={logoutHandler}>Logout</Button>
        </div>
    );
}

export default Logout;
