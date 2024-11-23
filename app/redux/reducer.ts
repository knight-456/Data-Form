import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "@/app/(private)/(sidebar)/product/_redux/slice";

const rootReducer = {
    product: productSlice
};

const reducer = combineReducers({
    ...rootReducer,
});

export default reducer;