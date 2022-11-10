import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';

const AdminOrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);

    useEffect(() => {
        getOrderData();
    }, [id]);

    const getOrderData = () => {
        axios.get(`/api/order-details/${id}`)
            .then(({ data }) => {
                setOrder(data);
            })
    }

    const columns = [
        {
            title: "Product Name",
            dataIndex: "product_name",
            key: "product_name",
        },
        {
            title: "Price",
            dataIndex: "product_price",
            key: "product_price",
        },
        {
            title: "Quantity",
            dataIndex: "product_amount",
            key: "product_amount",
        },
        {
            title: "Total",
            key: "total",
            render: (order) => order.product_price * order.product_amount
        },

    ];

    return (
        <div className='container'>
            <h2 className='my-3'>Order №{id}</h2>
            <Table dataSource={order} columns={columns} rowKey='id' footer={() => {
                const total = order.reduce((sum, elem) => sum + (elem.product_price * elem.product_amount), 0);
                return <div className='order-total'><span>Total: {total}</span></div>
            }} />
        </div>
    );
}

export default AdminOrderDetails;
