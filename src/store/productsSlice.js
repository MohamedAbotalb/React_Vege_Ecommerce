import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000/products";

// Async thunks for CRUD operations
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(baseURL);
    return response.data;
  }
);

export const addNewProduct = createAsyncThunk(
  "products/addNewProduct",
  async (product) => {
    const response = await axios.post(baseURL, product);
    return response.data;
  }
);

export const updateProductById = createAsyncThunk(
  "products/updateProductById",
  async ({ id, updatedProduct }) => {
    const response = await axios.put(`${baseURL}/${id}`, updatedProduct);
    return response.data;
  }
);

export const deleteProductById = createAsyncThunk(
  "products/deleteProductById",
  async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  }
);

// Initial state
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProductById.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
