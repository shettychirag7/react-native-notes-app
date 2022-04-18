import notesSlice from './notes';
import categorySlice from './categories';

export default {
  [notesSlice.name]: notesSlice.reducer,
  [categorySlice.name]: categorySlice.reducer,
};
