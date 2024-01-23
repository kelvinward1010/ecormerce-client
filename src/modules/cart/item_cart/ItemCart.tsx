import { Col, Image, Row, Typography, notification } from "antd";
import { ItemTypes } from "../../../types"
import styles from "./style.module.scss"
import { useCallback, useState } from "react";
import ButtonConfig from "../../../components/button/ButtonConfig";
import { CheckCircleOutlined, MinusOutlined, PlusOutlined, WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { removeItemIntoCart } from "../../../services/cart";
import { getDetailCart } from "../../../redux/actions/cartAction";

interface ItemCartProps{
    item?: ItemTypes;
}

const { Text } = Typography;

export const ItemCart: React.FC<ItemCartProps> = ({ item }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);
    const current_user = useSelector((state: RootState) => state.auth.currentUser);

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleRemoveItemCart = useCallback(() => {
        removeItemIntoCart({
            email_user_cart: current_user.email,
            id_item: item?.id,
        }).then(() => {
            notification.success({
              message: "Remove item in cart successfully!",
              icon: (
                <CheckCircleOutlined className="done" />
              )
            })
            getDetailCart(dispatch, current_user.email)
        }).catch((error) => {
            notification.error({
              message: `Could not remove item in cart. Please try again!`,
              description: ` ${error?.response?.data?.detail}`,
              icon: (
                <WarningOutlined className='warning' />
              )
            })
        })
    },[current_user.email, item?.id])

    return (
        <div className={styles.container}>
            <Row>
                <Col span={10} className={styles.left}>
                    <Image
                        height={150}
                        src={item?.image} 
                    />
                </Col>
                <Col span={10} className={styles.right}>
                    <Row justify={'space-between'}>
                        <Col span={14}>
                            <Text 
                                className={styles.name}
                                onClick={() => navigate('/item_detail/abc')}
                            >{item?.name}</Text>
                        </Col>
                        <Col span={9}>
                            <ButtonConfig
                                type={'fullbg'}
                                onClick={handleRemoveItemCart}
                                icon={<MinusOutlined />}
                                with={'fit-content'}
                                background={'red'}
                            />
                        </Col>
                    </Row>
                    <Row justify={'space-between'}>
                        <Col span={14}>
                            <Text>Price:</Text>
                        </Col>
                        <Col span={9}>
                            <Text>{item?.price}$</Text>
                        </Col>
                    </Row>
                    <Row justify={'space-between'}>
                        <Col span={14}>
                            <Text>Quantity:</Text>
                        </Col>
                        <Col span={9}>
                            <div className={styles.quantity}>
                                <ButtonConfig
                                    type={'fullbg'}
                                    onClick={handleMinus}
                                    icon={<MinusOutlined />}
                                    with={'fit-content'}
                                />
                                <Text className={styles.quantity_number}>{quantity}</Text>
                                <ButtonConfig
                                    type={'fullbg'}
                                    onClick={handlePlus}
                                    icon={<PlusOutlined />}
                                    with={'fit-content'}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
