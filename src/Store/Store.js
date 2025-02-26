import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "../ReduxSlice/noteSlice";

const store = configureStore({
    reducer : {
        note : noteReducer,
        // user : userReducer,another slice
    }
})

export default store;