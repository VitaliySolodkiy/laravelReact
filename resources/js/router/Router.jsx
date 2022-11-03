import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCategory from '../components/admin/pages/AdminCategory';
import Category from '../components/pages/Category';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';
import Order from '../components/pages/order/Order';
import OrderThank from '../components/pages/order/OrderThank';
import Product from '../components/pages/Product';
import Registration from '../components/pages/Registration';
import AuthUserContext from '../contexts/AuthUserContext';

const Router = () => {
    const [authUser] = useContext(AuthUserContext);
    const adminRoutes = () =>
        authUser?.role !== 'admin' ? (
            ''
        ) : (
            <Route path="/admin" >
                <Route path="" element={<h1>Dash </h1>} />
                <Route path="categories" element={<AdminCategory />} />
                <Route path="products" element={<h1>Products </h1>} />
            </Route>
        );

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-thank" element={<OrderThank />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            {adminRoutes()}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
