import "./Complaint.css"

import { Col, Row, Typography, Divider } from 'antd';
import UserInformation from "./UserInformation";
import PurchaseDetails from "./PurchaseDetails";

const Complaint = (props) => {
    const { complaint, purchase, user } = props.complaint;
    return (
        <Row className="complaint">
            <Col span={16}>
                <Typography.Paragraph className="complaint-content">
                    {complaint.complaint}
                </Typography.Paragraph>
                <Divider />
                <PurchaseDetails purchase={purchase}/>
            </Col>
            <Col span={1}>
                <Divider type="vertical" className='vertical-divider' />
            </Col>
            <Col span={7}>
                <UserInformation user={user} />
            </Col>
        </Row>
    );
}
export default Complaint;