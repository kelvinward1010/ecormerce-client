import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { Avatar, Badge, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ButtonConfig from "../button/ButtonConfig";
import { useState } from "react";
import ChangePassword from "./changepassword/ChangePassword";
import { IconFlare, IconShoppingCart } from "@tabler/icons-react";


function Header() {

    const navigate = useNavigate();

    const [isOpenChangePassword, setIsOpenChangePassword] = useState(false);

    const handleLogout = () => {
        navigate('/sign_in')
    }

    const current_user = null;
    
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