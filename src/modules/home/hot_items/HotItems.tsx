import { Typography } from "antd";
import { ItemDesign } from "../../../components";
import styles from "./style.module.scss";

const { Title } = Typography;

export function HotItems() {
    return (
        <div className={styles.container}>
            <Title className={styles.titlefix} level={4}>Hot Items</Title>
            <div className={styles.center}>
                <ItemDesign />
                <ItemDesign />
                <ItemDesign />
                <ItemDesign />
            </div>
        </div>
    )
}