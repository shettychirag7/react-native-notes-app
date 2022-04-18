import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Notes {
  title: string;
  description: string;
  creationDate: string;
}

export interface NotesState {
  notes: {
    [category: string]: Notes[];
  };
}

const initialState: NotesState = {
  notes: {},
};

/**
 * redux toolkit uses immer.js behind the scenes
 * so mutable code is auto converted to immutable code
 */
const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    onCreateCategory: (state, {payload}: PayloadAction<string>) => {
      state.notes[payload] = [];
    },
    onEditCategory: (
      state,
      {payload}: PayloadAction<{old: string; new: string}>,
    ) => {
      state.notes[payload.new] = state.notes[payload.old];
      delete state.notes[payload.old];
    },
    onDeleteCategory: (state, {payload}: PayloadAction<string>) => {
      delete state.notes[payload];
    },
    createNewNote: (
      state,
      {payload}: PayloadAction<{category: string; note: Notes}>,
    ) => {
      state.notes[payload.category].push(payload.note);
    },
    editNote: (
      state,
      {payload}: PayloadAction<{category: string; index: number; note: Notes}>,
    ) => {
      state.notes[payload.category][payload.index] = payload.note;
    },
    deleteNote: (
      state,
      {payload}: PayloadAction<{category: string; index: number}>,
    ) => {
      delete state.notes[payload.category][payload.index];
    },
  },
});

export const {onCreateCategory, onEditCategory, onDeleteCategory} =
  notesSlice.actions;

export default notesSlice;
