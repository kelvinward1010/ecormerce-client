import { useSelector } from "react-redux";
import { Footer } from "../footer/Footer";
import Header from "../header/Header";
import styles from "./style.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useEffect } from "react";

export function Layout(): JSX.Element {

    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        if(isAuthenticated === false) {
            navigate('/sign_in')
        }
    },[isAuthenticated])

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
