import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CategoryState {
  categories: string[];
}

const initialState: CategoryState = {
  categories: [],
};

/**
 * redux toolkit uses immer.js behind the scenes
 * so mutable code is auto converted to immutable code
 */
const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, {payload}: PayloadAction<string>) => {
      state.categories.push(payload);
    },
    editCategory: (
      state,
      {payload}: PayloadAction<{index: number; value: string}>,
    ) => {
      state.categories[payload.index] = payload.value;
    },
    deleteCategory: (state, {payload}: PayloadAction<number>) => {
      state.categories.splice(payload, 1);
    },
  },
});

export const {addCategory, editCategory, deleteCategory} =
  categorySlice.actions;

export default categorySlice;
