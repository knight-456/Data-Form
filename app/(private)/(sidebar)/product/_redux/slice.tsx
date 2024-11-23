import { createSlice } from "@reduxjs/toolkit";

import { productInitialState } from "./state";

const product = createSlice({
    name: "Product",
    initialState: productInitialState,
    reducers: {
        setProductList: (state, { payload }) => {
            state.productList = { ...state.productList, ...payload }
        },
        resetProductList: (state) => {
            state.productList = productInitialState.productList
        },

        setFabricList: (state, { payload }) => {
            state.fabricList = { ...state.fabricList, ...payload }
        },
        resetFabricList: (state) => {
            state.fabricList = productInitialState.fabricList
        },
    }
})

export const {
    setProductList,
    resetProductList,

    setFabricList,
    resetFabricList,
} = product.actions;

export default product.reducer;