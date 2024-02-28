import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:'order',
    initialState:{
        orderItems: []
    },
    reducers:{
        setOrders: (state,action)=>{
            state.orderItems = action.payload;
        }
    }


})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;