import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import FormProduct from './FormProduct';

const Add = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Product
            </Button>
            <Modal title="Add Product"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormProduct />
            </Modal>
        </>
    );
}

export default Add;
