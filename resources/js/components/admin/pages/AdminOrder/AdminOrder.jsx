import React, { useEffect, useState } from 'react';
import columns from './columns';
import { Table } from 'antd';

const AdminOrder = () => {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        const response = await axios.get('/api/orders');
        setOrders(response.data);

    }

    useEffect(() => {
        getOrders();
    }, []);


    return (
        <div className='container'>
            <h2 className='my-3'>Orders</h2>

            <Table dataSource={orders} columns={columns} rowKey='id' />
        </div>
    );
}

export default AdminOrder;
