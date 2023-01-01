import { Descriptions, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserInformation = (props) => {
    const { user } = props;

    const title = (
        <Space className="section-title">
            <span>User Info</span>
            <UserOutlined />
        </Space>
    )

    return (
        <Descriptions title={title}>
            <Descriptions.Item label="Name">{user.fullName}</Descriptions.Item>
            <Descriptions.Item label="Email">{user.emailAddress}</Descriptions.Item>
            <Descriptions.Item label="Address">{user.physicalAddress}</Descriptions.Item>
        </Descriptions>
    );
}
export default UserInformation;