import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMenu = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res;
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState: getMenu(),
})

