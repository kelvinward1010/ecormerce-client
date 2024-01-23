import { BASE_URL, LOCAL_ITEMS } from "../constant/config";
import { apiClient } from "../lib/api";


export const getDetailItem = async (id: string): Promise<any> => {
    const res = await apiClient?.get(`${BASE_URL}${LOCAL_ITEMS}/find_item/${id}`);
    return res.data
}