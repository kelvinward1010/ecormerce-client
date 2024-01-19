import { Footer } from "../footer/Footer";
import Header from "../header/Header";
import styles from "./style.module.scss";
import { Outlet } from "react-router-dom";

export function Layout(): JSX.Element {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.center}>
                <Outlet />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
