import { useDispatch, useSelector } from "react-redux";
import { Head } from "./head/Head";
import { HotItems } from "./hot_items/HotItems";
import styles from "./style.module.scss";
import { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getAllItems } from "../../redux/actions/itemAction";

export function Home() {

    const dispatch = useDispatch();
    const all_items = useSelector((state: RootState) => state.items.items);

    useEffect(() => {
        getAllItems(dispatch)
    },[dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <Head />
            </div>
            <div className={styles.hot_items}>
                <HotItems items={all_items}/>
            </div>
        </div>
    )
}