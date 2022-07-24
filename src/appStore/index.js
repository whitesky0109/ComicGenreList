import { configureStore } from '@reduxjs/toolkit';

import init from './reducers/init';
import genre from './reducers/genre';

const store = configureStore({
  reducer: {
    [init.name]: init.reducer,
    [genre.name]: genre.reducer,
  },
  devTools: true,
});

export default store;
