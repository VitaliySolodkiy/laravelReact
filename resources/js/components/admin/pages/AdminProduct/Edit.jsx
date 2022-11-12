import React from 'react';
import { Modal } from 'antd';
import FormProduct from './FormProduct';

const Edit = ({ isEditModalOpen, setIsEditModalOpen, editedProduct }) => {

    const handleCancel = () => {
        setIsEditModalOpen(false);
    };


    return (
        <div>
            <Modal title="Edit Product"
                open={isEditModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <FormProduct
                    handleCancel={handleCancel}
                    addProduct={null}
                    editedProduct={editedProduct}
                />
            </Modal>
        </div>
    );
}

export default Edit;
