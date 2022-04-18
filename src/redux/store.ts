import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slice';
import {CategoryState} from './slice/categories';
import {NotesState} from './slice/notes';

interface InitialState {
  categories?: CategoryState;
  notes?: NotesState;
}

export const createStore = (initialState?: InitialState) => {
  const store = configureStore({
    reducer: {
      ...rootReducer,
    },
    preloadedState: {
      ...initialState,
    },
  });
  return store;
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
