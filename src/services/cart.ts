import { BASE_URL, LOCAL_CARTS } from "../constant/config";
import { apiClient } from "../lib/api";


export const getDetailCart = async (email_user_cart: string): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_CARTS}/cart_find?email_user_cart=${email_user_cart}`);
    return res.data
}

interface ItemInCart {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    stars: any[],
}

export const addItemIntoCart = async (email_user_cart: string, item: ItemInCart): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}${LOCAL_CARTS}/add_item_to_cart?email_user_cart=${email_user_cart}`, item);
    return res.data
}