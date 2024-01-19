import { Button, Input, Typography } from "antd";
import styles from "./style.module.scss";
import { IconBrandFacebook, IconBrandGoogle, IconBrandInstagram, IconBrandWhatsapp, IconFlare, IconMail } from "@tabler/icons-react";
import { SendOutlined } from "@ant-design/icons";

const { Text } = Typography;

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <IconFlare className={styles.iconlogo} size={50}/>
                <h3>
                    Ecormerce Kelvin
                </h3>
            </div>
            <div className={styles.center}>
                <Text className={styles.text}>Home</Text>
                <Text className={styles.text}>News</Text>
                <Text className={styles.text}>Contact</Text>
                <Text className={styles.text}>Address</Text>
                <Text className={styles.text}>About Us</Text>
            </div>
            <div className={styles.right}>
                <div className={styles.social}>
                    <IconBrandGoogle color="white"/>
                    <IconBrandFacebook color="white"/>
                    <IconBrandInstagram color="white"/>
                    <IconMail color="white"/>
                    <IconBrandWhatsapp color="white" />
                </div>
                <div className={styles.send}>
                    <Input 
                        placeholder="Send your email"
                        className={styles.inputemail}
                    />
                    <Button 
                        className={styles.button}
                        icon={<SendOutlined />}
                    >Send Us</Button>
                </div>
            </div>
        </div>
    )
}
