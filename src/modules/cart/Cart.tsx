import { Col, Row, Typography } from "antd";
import styles from "./style.module.scss";
import { ItemCart } from "./item_cart/ItemCart";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getDetailCart } from "../../redux/actions/cartAction";

const { Text } = Typography;

export function Cart() {

    const dispatch = useDispatch();
    const current_user = useSelector((state: RootState) => state.auth.currentUser);
    const items_cart = useSelector((state: RootState) => state.carts.carts)?.carts;

    useEffect(() => {
        getDetailCart(dispatch, current_user?.email)
    },[dispatch])

    return (
        <div className={styles.container}>
            <Row>
                <Col span={13} className={styles.left}>
                    {items_cart?.map((item: any) => (
                        <ItemCart item={item} key={item?.id} />
                    ))}
                </Col>
                <Col span={10} className={styles.right}>
                    <Typography.Title level={4}>
                        Your invoice
                    </Typography.Title>
                    <Row>
                        <Col span={10}>
                            <Text>Price</Text>
                        </Col>
                        <Col span={10}>
                            <Text>100$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Shipping price</Text>
                        </Col>
                        <Col span={10}>
                            <Text>20$</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <Text>Total price.</Text>
                        </Col>
                        <Col span={10}>
                            <Text>120$</Text>
                        </Col>
                    </Row>
                    <div className={styles.button}>
                        <ButtonConfig 
                            name="Order"
                            type={'fullbg'}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}