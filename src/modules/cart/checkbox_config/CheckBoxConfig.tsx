import { Checkbox, Col, Row } from "antd";
import styles from "./style.module.scss";

interface CheckBoxConfigProps {
    data: any;
    children: React.ReactNode
}

export const CheckBoxConfig: React.FC<CheckBoxConfigProps> = ({
    children,
    data
}) => {
    return (
        <div className={styles.container}>
            <Row justify={'start'}>
                <Col span={2} className={styles.checkboxx}>
                    <Checkbox value={data} />
                </Col>
                <Col span={22}>
                    {children}
                </Col>
            </Row>
        </div>
    )
}