import { Col, Rate, Row, Typography } from "antd";
import styles from "./style.module.scss";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Text } = Typography;

export function ItemDetail() {

    const [quantity, setQuantity] = useState<number>(1);

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={styles.container}>
            <Row justify={'space-between'}>
                <Col span={10} className={styles.left}>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg" 
                        alt="img" 
                        className={styles.img}
                    />
                </Col>
                <Col span={12} className={styles.right}>
                    <Typography.Title level={4} className={styles.title}>
                        Title Item
                    </Typography.Title>
                    <Text className={styles.description}>
                        If the Ant Design grid layout component does not meet your needs, 
                        you can use the excellent layout components of the community:
                    </Text>
                    <Rate
                        allowHalf 
                        defaultValue={2.5} 
                        className={styles.rate}
                    />
                    <div className={styles.quantity}>
                        <ButtonConfig
                            type={'fullbg'}
                            onClick={handleMinus}
                            icon={<MinusOutlined />}
                            with={'fit-content'}
                        />
                        <Text className={styles.quantity_number}>{quantity}</Text>
                        <ButtonConfig
                            type={'fullbg'}
                            onClick={handlePlus}
                            icon={<PlusOutlined />}
                            with={'fit-content'}
                        />
                    </div>
                    <div className={styles.add_cart}>
                        <ButtonConfig
                            name="Add to cart"
                            type={'fullbg'}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
