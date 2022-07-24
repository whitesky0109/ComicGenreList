import { createSlice } from '@reduxjs/toolkit';

const initModule = createSlice({
  name: 'init',

  initialState: {
    lang: 'ko',
  },

  reducers: {
    setLang: (s, { payload }) => {
      const state = s;
      state.lang = payload;
    },
  },
});

export default initModule;
