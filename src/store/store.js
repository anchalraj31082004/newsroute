import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";
import bookmarkReducer,{loadBookmarksFromLocalStorage, saveBookmarksToLocalStorage} from "./bookmarkSlice";

const preloadedState = loadBookmarksFromLocalStorage()

const store = configureStore({
  reducer: {
    article: articleReducer,
    list: bookmarkReducer
  },
  preloadedState
});

//store bookmark in localstorage
store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  saveBookmarksToLocalStorage(state)
});

export default store;
