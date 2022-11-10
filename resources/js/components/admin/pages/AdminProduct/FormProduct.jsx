import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';


const FormProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const { data } = await axios.get('/api/categories');
        const items = data.map(item => { return { value: item.id, label: item.name } })
        setCategories(items);

    }

    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const initialValues = {};
    const submitHandler = () => { };

    return (
        <Form
            initialValues={initialValues}
            onFinish={submitHandler}

        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Desc"
                name="description"
                rules={[{ required: true }]}
            >
                <TextArea />
            </Form.Item>

            <Form.Item
                label="Category"
                name="category_id"
                rules={[{ required: true }]}
            >
                <Select
                    defaultValue="Choose Category"
                    style={{
                        width: 120,
                    }}

                    options={categories}
                />
            </Form.Item>

            <Form.Item
                label="Image"
                name="image"
            >
                <Upload action="/upload.do" listType="picture-card" maxCount={1} onPreview={onPreview}>
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
        </Form>
    );
}

export default FormProduct;
