import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize cart items as an empty array
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find((item) => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the item already exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity of 1
      }
    },
    // Remove item from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name); // Filter out the item by name
    },
    // Update item quantity in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract name and new quantity from payload
      const item = state.items.find((item) => item.name === name);
      if (item) {
        item.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store configuration
export default CartSlice.reducer;
