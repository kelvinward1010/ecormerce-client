import { Col, Rate, Row, Typography } from "antd";
import styles from "./style.module.scss";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useEffect, useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { detailItem } from "../../redux/actions/itemAction";
import { useParams } from "react-router-dom";

const { Text } = Typography;

export function ItemDetail() {

    const dispatch = useDispatch();
    const idParams = useParams().id;
    const [quantity, setQuantity] = useState<number>(1);
    const item_detail = useSelector((state: RootState) => state.items.item_detail);

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    useEffect(() => {
        detailItem(dispatch, idParams as string)
    },[dispatch, idParams])

    return (
        <div className={styles.container}>
            <Row justify={'space-between'}>
                <Col span={10} className={styles.left}>
                    <img 
                        src={item_detail?.image} 
                        alt="img" 
                        className={styles.img}
                    />
                </Col>
                <Col span={12} className={styles.right}>
                    <Typography.Title level={4} className={styles.title}>
                        {item_detail?.name}
                    </Typography.Title>
                    <Text className={styles.description}>
                        {item_detail?.description}
                    </Text>
                    <Text>Price:  {item_detail?.price}$</Text>
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
