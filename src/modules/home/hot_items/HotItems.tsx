import { Typography } from "antd";
import { ItemDesign } from "../../../components";
import styles from "./style.module.scss";

const { Title } = Typography;

interface HotItemsProps{
    items?: any;
}

export const HotItems: React.FC<HotItemsProps> = ({
    items
}) => {
    const data: any[] = items.slice(0,5);
    return (
        <div className={styles.container}>
            <Title className={styles.titlefix} level={4}>Hot Items</Title>
            <div className={styles.center}>
                {data?.map((item: any) => (
                    <ItemDesign key={item?.id} item={item}/>
                ))}
            </div>
        </div>
    )
}