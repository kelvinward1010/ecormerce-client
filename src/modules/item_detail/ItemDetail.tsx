import { Col, Rate, Row, Typography, notification } from "antd";
import styles from "./style.module.scss";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useCallback, useEffect, useState } from "react";
import { CheckCircleOutlined, MinusOutlined, PlusOutlined, WarningOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailItem } from "../../services/item";
import { useDispatch, useSelector } from "react-redux";
import { addItemIntoCart } from "../../services/cart";
import { RootState } from "../../redux/store";
import { getDetailCart } from "../../redux/actions/cartAction";
import { NotificationConfig } from "../../components";
import { signinUrl } from "../../urls";

const { Text } = Typography;

export function ItemDetail() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idParams = useParams().id;
    const [data, setData] = useState<any>();
    const [isOpenWarning, setIsOpenWarning] = useState(false);
    const current_user = useSelector((state: RootState) => state.auth.currentUser);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        getDetailItem(idParams as string).then((res) => setData(res.data))
    },[idParams])

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = useCallback(() => {
        addItemIntoCart(current_user?.email, {
            id: data?.id,
            name: data?.name,
            description: data?.description,
            price: data?.price,
            image: data?.image,
            stars: data?.stars,
            amount_in_stock: data?.amount_in_stock,
            quantity: quantity,
        }).then(() => {
            notification.success({
              message: "Added to cart successfully!",
              icon: (
                <CheckCircleOutlined className="done" />
              )
            })
            {current_user && getDetailCart(dispatch, current_user?.email)}
        }).catch((error) => {
            notification.error({
              message: `Could not add to cart. Please try again!`,
              description: ` ${error?.response?.data?.detail}`,
              icon: (
                <WarningOutlined className='warning' />
              )
            })
        })
    },[data, quantity]);

    const handleWarningSignIn = () => {
        setIsOpenWarning(true);
    }

    const handleConfirmWarning = () => {
        navigate(signinUrl)
        setIsOpenWarning(false);
    }

    const handleCancelWarning = () => {
        setIsOpenWarning(false);
    }

    return (
        <>
            <NotificationConfig 
                label_1="Warning"
                label_2="Please sign in to continue!"
                isOpen={isOpenWarning}
                setIsOpen={setIsOpenWarning}
                labelActionConfirm="Sign In"
                handleActionCancel={handleCancelWarning}
                handleActionConfirm={handleConfirmWarning}
            />
            <div className={styles.container}>
                <Row justify={'space-between'}>
                    <Col span={10} className={styles.left}>
                        <img 
                            src={data?.image} 
                            alt="img" 
                            className={styles.img}
                        />
                    </Col>
                    <Col span={12} className={styles.right}>
                        <Typography.Title level={4} className={styles.title}>
                            {data?.name}
                        </Typography.Title>
                        <Text className={styles.description}>
                            {data?.description}
                        </Text>
                        <Text>Price:  {data?.price}$</Text>
                        <Rate
                            allowHalf 
                            defaultValue={2.5} 
                            className={styles.rate}
                        />
                        <Text>Number of item in stock: {data?.amount_in_stock}</Text>
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
                        <div className={styles.add_cart}>
                            {current_user ? (
                                <ButtonConfig
                                    onClick={handleAddToCart}
                                    name="Add to cart"
                                    type={'fullbg'}
                                />
                            ):(
                                <ButtonConfig
                                    onClick={handleWarningSignIn}
                                    name={'Sign In to add your card!'}
                                    type="fullbg"
                                    background={'orange'}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
