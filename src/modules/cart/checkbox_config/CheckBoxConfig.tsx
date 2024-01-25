import { Checkbox, Col, Row } from "antd";
import styles from "./style.module.scss";
import { ItemCart } from "../item_cart/ItemCart";

interface CheckBoxConfigProps {
    data: any;
    checked: () => boolean;
}

export const CheckBoxConfig: React.FC<CheckBoxConfigProps> = ({
    data,
    checked
}) => {
    const isCheck = checked();
    return (
        <div className={styles.container}>
            <Row justify={'start'}>
                <Col span={2} className={styles.checkboxx}>
                    <Checkbox checked={isCheck} className="checkbox_fix" value={data} />
                </Col>
                <Col span={22} className={styles.children}>
                    <ItemCart item={data} />
                </Col>
            </Row>
        </div>
    )
}