import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { isDev } from 'index';

/**
 * @param {string} genre
 * @param {nubmer} page
 */
function fetchGenreMock(genre, page) {
  return new Promise((resolve) => {
    try {
      /**
       * @type {import('./comic').ComicRankApiSuccessResponse}
       */
      const result = require(`mock/${genre}/page_${page}.json`);
      resolve(result);
    } catch (e) {
      resolve({ error: e.message });
    }
  });
}

/**
 * @param {string} genre
 * @param {nubmer} page
 */
export async function fetchGenre(genre, page) {
  const result = await axios(`/api/comics/${genre}`, {
    params: {
      page,
    },
  });
  return result;
}

export const fetchGetComic = createAsyncThunk('api/comics/GET', async ({
  genre,
}, { rejectWithValue, getState }) => {
  const { genre: { page } } = getState();
  const fetch = fetchGenreMock;
  // const fetch = isDev ? fetchGenreMock : fetchGenre;
  const result = await fetch(genre, page);

  if (result.error) {
    return rejectWithValue(result.error);
  }
  return result;
});
