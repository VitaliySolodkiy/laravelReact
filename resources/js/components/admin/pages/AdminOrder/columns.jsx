import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const getColumns = (removeOrder) => {
    const columns = [
        {
            title: "Order number",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Total",
            dataIndex: "total_sum",
            key: "total_sum",
        },
        {
            title: "User email",
            dataIndex: "user_email",
            key: "total_sum",
        },
        {
            title: "User Phome",
            dataIndex: "user_phone",
            key: "user_phone",
        },
        {
            title: "Create date",
            dataIndex: "created_at",
            key: "created_at",
        },
        {
            title: "Action",
            key: "action",
            render: (order) => (
                <div>
                    <Link to={`/admin/orders/${order.id}`}><EyeOutlined style={{ fontSize: '25px', paddingRight: '10px' }} /></Link>
                    <DeleteOutlined
                        style={{ fontSize: '25px', color: '#f00' }}
                        onClick={() => removeOrder(order.id)}
                    />
                </div>
            )
        },
    ];
    return columns;
};

export default getColumns;