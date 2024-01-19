import { Col, Row, Typography } from "antd";
import styles from "./style.module.scss";
import { ItemCart } from "./item_cart/ItemCart";
import ButtonConfig from "../../components/button/ButtonConfig";

const { Text } = Typography;

export function Cart() {
    return (
        <div className={styles.container}>
            <Row>
                <Col span={13} className={styles.left}>
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
                    <ItemCart />
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