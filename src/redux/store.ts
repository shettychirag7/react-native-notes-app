import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slice';

export const createStore = () => {
  const store = configureStore({
    reducer: {
      ...rootReducer,
    },
  });
  return store;
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
