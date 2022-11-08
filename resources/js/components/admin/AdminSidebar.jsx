import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='sidebar'>
            <h2 className='my-3'>Admin Sidebar</h2>
            <div className="list-group">
                <Link to={`/admin`} className="list-group-item list-group-item-action " >Home</Link>
                <Link to={`/admin/categories`} className="list-group-item list-group-item-action" >Categories</Link>
            </div >
            <Link to={`/`} className="" >Back to site</Link>
        </div >
    );
}

export default AdminSidebar;
