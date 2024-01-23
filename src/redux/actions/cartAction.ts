import { BASE_URL, LOCAL_CARTS } from "../../constant/config";
import { apiClient } from "../../lib/api";
import { Dispatch } from "@reduxjs/toolkit";
import { getAllInCarts } from "../slices/cartSlice";


export const getDetailCart = async (dispatch: Dispatch, email_user_cart: string): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_CARTS}/cart_find?email_user_cart=${email_user_cart}`);
    dispatch(getAllInCarts(res.data))
    return res.data
}