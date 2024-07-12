import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import bagItemsSlice from "./bagItemsSlice";

const meeshoStore=configureStore( {reducer:
  {
    items:itemsSlice.reducer,
    bagItems:bagItemsSlice.reducer
  }
})


export default meeshoStore;