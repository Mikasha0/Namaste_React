import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const newItemId = newItem.card.info.id;
      const existingItem = state.item.find(
        (item) => item.card.info.id === newItemId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.item.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.item.pop();
    },
    clearItem: (state, action) => {
      state.item.length = 0;
    },
    increaseItem: (state, action) => {
      const existingItem = state.item.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      state.item.map((item) => {
        if (item.card.info.id === action.payload.card.info.id) {
          if (item.quantity === 1) {
            return null;
          } else {
            item.quantity -= 1;
          }
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem, clearItem, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
