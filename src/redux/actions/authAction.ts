import { Dispatch } from "@reduxjs/toolkit";
import { apiClient } from "../../lib/api";
import { LOCAL_AUTH, LOCAL_USERS } from "../../constant/config";
import { login, logout, register, update } from "../slices/authSlice";

export const signUp = async (dispatch: Dispatch, credentials: { name: string, email: string; password: string, image: string }) => {
    const res = await apiClient.post(`/${LOCAL_AUTH}/register`, credentials);
    dispatch(register(res.data))
    return res.data
}

export const signIn = async (dispatch: Dispatch, user: { email: string; password: string }) => {
    const res = await apiClient.post(`/${LOCAL_AUTH}/login`, user);
    dispatch(login(res.data))
    return res.data
}

export const signOut = async (dispatch: Dispatch) => {
    const res = await apiClient.post(`/${LOCAL_AUTH}/logout`);
    dispatch(logout())
    return res.data
}

export const update_password = async (dispatch: Dispatch, credentials: { email: string; old_password: string; password: string }, id: string) => {
    const res = await apiClient.put(`/${LOCAL_USERS}/change_password/${id}`, credentials);
    dispatch(update(res.data))
    return res.data
}

export const update_profile = async (dispatch: Dispatch, credentials: { name: string; email: string; image: string }, id: string) => {
    const res = await apiClient.put(`/${LOCAL_USERS}/update_user/${id}`, credentials);
    dispatch(update(res.data))
    return res.data
}
