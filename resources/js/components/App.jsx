import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthUserContext from '../contexts/AuthUserContext';
import FrontEnd from './FrontEnd';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Order from './pages/order/Order';
import OrderThank from './pages/order/OrderThank';
import Login from './pages/Login';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';
import AdminCategory from './admin/pages/AdminCategory';
import Admin from './admin/Admin';
import AdminHome from './admin/pages/AdminHome';


const App = () => {

    const [authUser] = useContext(AuthUserContext);
    const adminRoutes = () =>
        authUser?.role !== 'admin' ? (
            ''
        ) : (
            <Route path="/admin" element={<Admin />} >
                <Route path="/admin" element={<AdminHome />} />
                <Route path="categories" element={<AdminCategory />} />
                <Route path="products" element={<h1>Products </h1>} />
            </Route>
        );


    return (
        <Routes>
            <Route path="/" element={<FrontEnd />} >
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order-thank" element={<OrderThank />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Route>
            {adminRoutes()}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;