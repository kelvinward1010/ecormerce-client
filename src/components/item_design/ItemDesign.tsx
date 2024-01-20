import { Card, Col, Rate, Row, Typography } from "antd";
import { ItemTypes } from "../../types";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const { Meta } = Card;
const { Text } = Typography;

interface ItemDesignProps {
    item: ItemTypes;
}

export const ItemDesign: React.FC<ItemDesignProps> = ({ item }) => {
    const navigate = useNavigate();

    let date_string = item?.created_at;
    let date = parseISO(date_string);
    let formatted_date = format(date, 'dd/MM/yyyy');

    const description = (
        <div>
            <Row justify={'space-between'}>
                <Col span={8}>
                    <Text>Created:</Text>
                </Col>
                <Col span={16}>
                    <Text>{formatted_date}</Text>
                </Col>
            </Row>
            <Row justify={'space-between'}>
                <Col span={8}>
                    <Text>Price:</Text>
                </Col>
                <Col span={16}>
                    <Text className={styles.number_price}>{item?.price}</Text>
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
                        src={item?.image} 
                    />
                }
                onClick={() => navigate(`/item_detail/${item?.id}`)}
            >
                <Meta
                    title={item?.name}
                    description={description}
                />
            </Card>
        </div>
    )
}