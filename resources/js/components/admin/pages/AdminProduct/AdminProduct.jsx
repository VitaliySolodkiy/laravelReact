import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import columns from './Columns';
import Add from './Add';

const AdminProduct = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <div className='container'>
            <h2 className='my-3'>Products</h2>
            <Add />
            <Table dataSource={products} columns={columns} rowKey='id' />
        </div>
    );
}

export default AdminProduct;
