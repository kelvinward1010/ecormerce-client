import { Col, Rate, Row, Typography, notification } from "antd";
import styles from "./style.module.scss";
import ButtonConfig from "../../components/button/ButtonConfig";
import { useCallback, useEffect, useState } from "react";
import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { getDetailItem } from "../../services/item";
import { useDispatch, useSelector } from "react-redux";
import { addItemIntoCart } from "../../services/cart";
import { RootState } from "../../redux/store";
import { getDetailCart } from "../../redux/actions/cartAction";

const { Text } = Typography;

export function ItemDetail() {

    const dispatch = useDispatch();
    const idParams = useParams().id;
    const [data, setData] = useState<any>();
    const current_user = useSelector((state: RootState) => state.auth.currentUser);

    useEffect(() => {
        getDetailItem(idParams as string).then((res) => setData(res.data))
    },[idParams])

    const handleAddToCart = useCallback(() => {
        addItemIntoCart(current_user?.email, {
            id: data?.id,
            name: data?.name,
            description: data?.description,
            price: data?.price,
            image: data?.image,
            stars: data?.stars,
            amount_in_stock: data?.amount_in_stock,
        }).then(() => {
            notification.success({
              message: "Added to cart successfully!",
              icon: (
                <CheckCircleOutlined className="done" />
              )
            })
            getDetailCart(dispatch, current_user.email)
        }).catch((error) => {
            notification.error({
              message: `Could not add to cart. Please try again!`,
              description: ` ${error?.response?.data?.detail}`,
              icon: (
                <WarningOutlined className='warning' />
              )
            })
        })
    },[ data])

    return (
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
                    <div className={styles.add_cart}>
                        <ButtonConfig
                            onClick={handleAddToCart}
                            name="Add to cart"
                            type={'fullbg'}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
