import { Card, Col, Rate, Row, Typography } from "antd";
import { ItemTypes } from "../../types";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Text } = Typography;

interface ItemDesignProps {
    item?: ItemTypes;
}

export const ItemDesign: React.FC<ItemDesignProps> = ({ item }) => {
    const navigate = useNavigate();
    const description = (
        <div>
            <Row justify={'space-between'}>
                <Col span={8}>
                    <Text>Created At:</Text>
                </Col>
                <Col span={16}>
                    <Text>10/10/2020</Text>
                </Col>
            </Row>
            <Row justify={'space-between'}>
                <Col span={8}>
                    <Text>Price:</Text>
                </Col>
                <Col span={16}>
                    <Text className={styles.number_price}>100$</Text>
                </Col>
            </Row>
            <Row justify={'space-between'}>
                <Col span={8}>
                    <Text>Stars:</Text>
                </Col>
                <Col span={16}>
                    <Rate 
                        allowHalf 
                        defaultValue={2.5} 
                    />
                </Col>
            </Row>
        </div>
    )

    return (
        <div className={styles.container}>
            <Card
                hoverable
                style={{ 
                    width: 250,
                }}
                cover={
                    <img 
                        alt="example" 
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
                    />
                }
                onClick={() => navigate('/item_detail/abc')}
            >
                <Meta
                    title="Europe Street beat" 
                    description={description}
                />
            </Card>
        </div>
    )
}