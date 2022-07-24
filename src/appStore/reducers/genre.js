import { createSlice } from '@reduxjs/toolkit';

import { fetchGetComic } from 'appStore/api/comicAPI';

export const STATUS_TYPE = Object.freeze({
  LOADING: 'loading',
  IDLE: 'idle',
});

const slice = createSlice({
  name: 'genre',

  initialState: {
    status: STATUS_TYPE.IDLE,
    currentGenre: '',
    page: 1,

    hasNext: true,
    count: 0,
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchGetComic.pending, (s, { genre }) => {
        const state = s;
        state.status = STATUS_TYPE.LOADING;
        if (state.currentGenre !== genre) {
          state.data = [];
          state.page = 1;
          state.count = state.data.length;
        }
        state.currentGenre = genre;
      })
      .addCase(fetchGetComic.fulfilled, (s, { payload: { data, hasNext } }) => {
        const state = s;
        state.status = STATUS_TYPE.IDLE;

        state.page += 1;

        state.hasNext = hasNext;
        state.data.push(...data);
        state.count = state.data.length;
      })
      .addCase(fetchGetComic.rejected, (s) => {
        const state = s;
        state.status = STATUS_TYPE.IDLE;
      });
  },

});

export default slice;
