// /* eslint-disable no-undef */
// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// const initialState = {
//     data: []
// }

// const productSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {
//         fetchProducts(state, action) {
//             state.action = action.payload
//         }
//     },
//     extraBuilders:(builder)=>{
//       builder.addCase(GetProducts.pending,(state,action)=>{
//         state.status='Loading'
//       })
//       .addCase(GetProducts.fulfilled,(state,action)=>{
//         state.data=action.payload
//         state.status="idle"
//       })
//       .addCase(GetProducts.rejected,(state,action)=>{
//         state.status=error
//       })
//     }
// })
// export const {fetchProducts } = productSlice.actions;
// export default productSlice.reducer

// export const GetProducts=createAsyncThunk('products/Get',async()=>{
//     const data = await fetch('https://fakestoreapi.com/products');
//         const result = data.json();
//         return result;
// })


// // export function GetProducts() {
// //     return async function GetProductsThunk(dispatch, getState) {
// //         const data = await fetch('https://fakestoreapi.com/products');
// //         const result = await data.json();
// //         dispatch(fetchProducts(result))
// //     }
// // }

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const GetProducts = createAsyncThunk("products/Get", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        // state.status = "loading";
        state.status = StatusCode.Loading
        state.error = null;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        // state.status = "idle";
        state.status = StatusCode.IDLE
        state.data = action.payload;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        // state.status = "error";
        state.status = StatusCode.ERROR
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

