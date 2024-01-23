import { Col, Row, Typography } from "antd";
import { ItemTypes } from "../../../types"
import styles from "./style.module.scss"
import { useState } from "react";
import ButtonConfig from "../../../components/button/ButtonConfig";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface ItemCartProps{
    item?: ItemTypes;
}

const { Text } = Typography;

export const ItemCart: React.FC<ItemCartProps> = ({ item }) => {

    const navigate = useNavigate();
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
            <Row>
                <Col span={10} className={styles.left}>
                    <img 
                        src={item?.image} 
                        alt="img" 
                        className={styles.img_cart}
                    />
                </Col>
                <Col span={10} className={styles.right}>
                    <Text 
                        className={styles.name}
                        onClick={() => navigate('/item_detail/abc')}
                    >{item?.name}</Text>
                    <Row justify={'space-between'}>
                        <Col span={10}>
                            <Text>Price:</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{item?.price}$</Text>
                        </Col>
                    </Row>
                    <Row justify={'space-between'}>
                        <Col span={10}>
                            <Text>Quantity:</Text>
                        </Col>
                        <Col span={10}>
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
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
