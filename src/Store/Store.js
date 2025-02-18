import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "../ReduxSlice/noteSlice";

const store = configureStore({
    reducer : {note : noteReducer}
})

export default store;