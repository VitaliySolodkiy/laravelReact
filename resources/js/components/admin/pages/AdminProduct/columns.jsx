import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const columns = [
    {
        title: "Image",
        key: "image",
        render: (product) => <Avatar src={product.image} shape="square" size={70} />

    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
    {
        title: "Category",
        key: "category",
        render: (product) => product.category.name
    },
    {
        title: "Action",
        key: "action",
        render: (product) => (
            <div>
                <EditOutlined style={{ fontSize: '25px', color: '#00D678', paddingRight: '10px' }} />
                <DeleteOutlined style={{ fontSize: '25px', color: '#f00' }} />
            </div>
        ),
    },
];

export default columns