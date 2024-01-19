import { Head } from "./head/Head";
import { HotItems } from "./hot_items/HotItems";
import styles from "./style.module.scss";

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <Head />
            </div>
            <div className={styles.hot_items}>
                <HotItems />
            </div>
        </div>
    )
}