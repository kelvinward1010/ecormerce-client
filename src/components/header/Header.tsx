import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { Avatar, Badge, Dropdown, notification } from "antd";
import { CheckCircleOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import ButtonConfig from "../button/ButtonConfig";
import { useState } from "react";
import ChangePassword from "./changepassword/ChangePassword";
import { IconFlare, IconShoppingCart } from "@tabler/icons-react";
import { signOut } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);
    const current_user = useSelector((state: RootState) => state.auth.currentUser);

    const handleLogout = () => {
        signOut(dispatch).then(() => {
            notification.success({
                message: "Logout successfully!",
                icon: (
                    <CheckCircleOutlined className="done" />
                )
            })
            navigate('/sign_in')
        }).catch((error) => {
            notification.error({
                message: `Could not logout. Please try again!`,
                description: ` ${error?.response?.data?.detail}`,
                icon: (
                    <WarningOutlined className='warning' />
                )
            })
        })
    }

    const items = [
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => navigate('/items_ordered')}
                    name="Items ordered"
                />
            </>,
            key: '0',
        },
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => navigate('/items_delivered')}
                    name="Items delivered"
                />
            </>,
            key: '1',
        },
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={() => setIsOpenChangePassword(true)}
                    name="Change Passowrd"
                />
            </>,
            key: '2',
        },
        {
            label: <>
                <ButtonConfig
                    type={'fullbg'}
                    onClick={handleLogout}
                    name="Sign Out"
                />
            </>,
            key: '3',
        },
    ]

    return (
        <>
            <ChangePassword
                current_user={current_user}
                isOpen={isOpenChangePassword}
                setIsOpen={setIsOpenChangePassword}
            />
            <div className={styles.container}>
                <div className={styles.header_left} onClick={() => navigate('/')}>
                    <IconFlare />
                    <h5>Ecormerce</h5>
                </div>
                <div className={styles.header_right}>
                    <Badge
                        count={5}
                        size="small"
                        className={styles.cart}
                    >
                        <IconShoppingCart
                            color="white"
                            onClick={() => navigate('/cart')}
                        />
                    </Badge>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <Avatar className={styles.avatar} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Header