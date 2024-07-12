import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "./itemsList";


const itemsSlice= createSlice(
  {name:'items',
   initialState:DEFAULT_ITEMS,
   reducers:{
      addInitialItems:(store,action)=>{
        return store;
      }
   }
  }
);

export const itemsActions=itemsSlice.actions;
export default itemsSlice;