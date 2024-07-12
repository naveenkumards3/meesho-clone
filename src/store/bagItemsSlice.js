import { createSlice } from "@reduxjs/toolkit";

const bagItemsSlice=createSlice({
  name:"bagItems",
  initialState:[],
  reducers:{
    addToBag :(store,action) => {
      store.push(action.payload)
      return store;
    },

   removeFromBag :(store,action)=>{
    return store.filter(item=> item !== action.payload)
   }
  }
})

export const bagItemsAction = bagItemsSlice.actions
export default bagItemsSlice