import { Dispatch } from "@reduxjs/toolkit";
import { BASE_URL, LOCAL_ITEMS } from "../../constant/config";
import { apiClient } from "../../lib/api";
import { getallitems, searchitems } from "../slices/itemSlice";


interface Props {
    search: string;
}

export const searchItems = async (dispatch: Dispatch, data: Props): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_ITEMS}/search?search=${data.search}`)
    dispatch(searchitems(res.data))
    return res.data
}

export const getAllItems = async (dispatch: Dispatch): Promise<any[]> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_ITEMS}/get_all`)
    dispatch(getallitems(res.data));
    return res.data
}