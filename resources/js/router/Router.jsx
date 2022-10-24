import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../components/pages/Category';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import Product from '../components/pages/Product';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Router;
