import { Typography, Descriptions, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const PurchaseDetails = (props) => {
    const { purchase } = props;

    const title = (
        <Space className="section-title">
            <span>Purchase Details</span>
            <ShoppingCartOutlined />
        </Space>

    )

    return (
        <Descriptions title={title}>
            <Descriptions.Item label="Purchase ID"> <Paragraph copyable>{purchase.id}</Paragraph></Descriptions.Item>
            <Descriptions.Item label="Merchant ID"> <Paragraph copyable>{purchase.merchantId}</Paragraph></Descriptions.Item>
            <Descriptions.Item label="Product"><Space><Paragraph>{purchase.productName}</Paragraph><Paragraph copyable>{purchase.productId}</Paragraph></Space></Descriptions.Item>
            <Descriptions.Item label="Cost"><Space><Text>{purchase.pricePaidAmount}</Text><Text>{purchase.priceCurrency}</Text></Space></Descriptions.Item>
            <Descriptions.Item label="Discount">{purchase.discountPercent}%</Descriptions.Item>
            <Descriptions.Item label="Purchase Date">{purchase.purchaseDate.format("YYYY-MM-DD HH:mm:ss")}</Descriptions.Item>
        </Descriptions>
    );
}
export default PurchaseDetails;