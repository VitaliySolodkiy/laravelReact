import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';

const AdminOrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);
    const [orderProducts, setOrderProducts] = useState([]);

    useEffect(() => {
        getOrderData();
    }, [id]);

    const getOrderData = () => {
        axios.get(`/api/order-details/${id}`)
            .then(({ data }) => {
                setOrder(data);
                setOrderProducts(data.order_products)
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
            render: (orderProducts) => orderProducts.product_price * orderProducts.product_amount
        },

    ];

    return (
        <div className='container'>
            <h2 className='my-3'>Order №{id}</h2>
            <p><b>Email:</b> {order.user_email}</p>
            <p><b>Phone:</b> {order.user_phone}</p>
            <p><b>Created at:</b> {order.created_at}</p>
            <hr></hr>
            <h4>Order Products:</h4>
            <Table dataSource={orderProducts} columns={columns} rowKey='id'
                footer={() => {
                    const total = orderProducts.reduce((sum, elem) => sum + (elem.product_price * elem.product_amount), 0);
                    return <div className='order-total'><span>Total: {total}</span></div>
                }}
            />

        </div>
    );
}

export default AdminOrderDetails;
