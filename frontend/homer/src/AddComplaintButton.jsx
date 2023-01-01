import "./AddComplaintButton.css";
import { useState } from "react";
import { Button, Modal, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { addComplaint } from "./actions";

const { TextArea } = Input;

const AddComplaintButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = (complaint) => {
        addComplaint(complaint);
        setIsModalOpen(false);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields()
    };

    const defaultPurchaseId = "f256c996-6dcb-40cf-8dce-a11fa9bcab6b";
    const defaultUserId = "a93adc57-4d59-4a9d-85c6-b5d48d99101d";

    return (
        <>
            <Button type="primary" shape="circle" icon={<PlusOutlined />} className="add-complaint-button" onClick={showModal} />
            <Modal title="Add Complaint" open={isModalOpen} onOk={form.submit} onCancel={handleCancel}>
                <Form form={form} onFinish={handleSubmit}>
                    <Form.Item label="Subject" name="subject">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Complaint" name="complaint">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Purchase ID" name="purchaseId" initialValue={defaultPurchaseId}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="User ID" name="userId" initialValue={defaultUserId}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default AddComplaintButton;