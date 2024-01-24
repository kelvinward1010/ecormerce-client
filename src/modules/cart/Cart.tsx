import { Checkbox, Col, Row, Typography } from "antd";
import styles from "./style.module.scss";
import { ItemCart } from "./item_cart/ItemCart";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getDetailCart } from "../../redux/actions/cartAction";
import { CheckBoxConfig } from "./checkbox_config/CheckBoxConfig";
import type { GetProp } from 'antd';
import { handleTotalPrice } from "../../equation";

const { Text } = Typography;

export function Cart() {

    const dispatch = useDispatch();
    const current_user = useSelector((state: RootState) => state.auth.currentUser);
    const items_cart = useSelector((state: RootState) => state.carts.carts)?.carts;
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getDetailCart(dispatch, current_user?.email)
    }, [dispatch])

    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        let prices = handleTotalPrice(checkedValues)
        setTotal(prices)
    };


    return (
        <div className={styles.container}>
            <Row>
                <Col span={15} className={styles.left}>
                    <Checkbox.Group onChange={onChange} className={styles.checkbox_group}>
                        {items_cart?.map((item: any) => (
                            <CheckBoxConfig data={item} key={item?.id}>
                                <ItemCart item={item} />
                            </CheckBoxConfig>
                        ))}
                    </Checkbox.Group>
                </Col>
                <Col span={8} className={styles.right}>
                    <Typography.Title level={4}>
                        Your invoice
                    </Typography.Title>
                    <Row>
                        <Col span={10}>
                            <Text>Price</Text>
                        </Col>
                        <Col span={10}>
                            <Text>{total}$</Text>
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
                            <Text>{total + 20}$</Text>
                        </Col>
                    </Row>
                    <div className={styles.button}>
                        <ButtonConfig
                            name="Next step"
                            type={'fullbg'}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}