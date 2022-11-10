import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
                {/* <EditOutlined style={{ fontSize: '25px' }} /> */}
            </div>
        )
    },
];

export default columns