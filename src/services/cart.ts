import { BASE_URL, LOCAL_CARTS } from "../constant/config";
import { apiClient } from "../lib/api";


export const getDetailCart = async (email_user_cart: string): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_CARTS}/cart_find?email_user_cart=${email_user_cart}`);
    return res.data
}

interface AddItemInCart {
    id: string,
    name: string,
    description: string,
    image: string,
    price: number,
    stars: any[],
    amount_in_stock: number,
    quantity: number
}

export const addItemIntoCart = async (email_user_cart: string, item: AddItemInCart): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}${LOCAL_CARTS}/add_item_to_cart?email_user_cart=${email_user_cart}`, item);
    return res.data
}

interface RemoveItemInCart {
    email_user_cart: string,
    id_item?: string,
}

export const removeItemIntoCart = async (data: RemoveItemInCart): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}${LOCAL_CARTS}/remove_item_in_cart`, data);
    return res.data
}

interface UpdateQuantityItemIntoCart {
    email_user_cart: string,
    id_item?: string,
    plus?: boolean
    minus?: boolean
}

export const updateQuantityItemIntoCart = async (data: UpdateQuantityItemIntoCart): Promise<any> => {
    const res = await apiClient?.put(`${BASE_URL}${LOCAL_CARTS}/update_quantity_item_cart`, data);
    return res.data
}