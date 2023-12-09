import { createSlice } from "@reduxjs/toolkit";

//load bookmark from localstorage
export const loadBookmarksFromLocalStorage = () => {
    try {
        const storedBookmark = localStorage.getItem("bookmark");
        return storedBookmark ? JSON.parse(storedBookmark) : [];
    } catch (error) {
        console.error("error occured while loading bookmarks", error)
        return [];
    }
}

export const saveBookmarksToLocalStorage = (bookmark) => {
  // console.log(bookmark);
    try {
        const storedBookmark = JSON.stringify(bookmark);
        localStorage.setItem("bookmark", storedBookmark);
    } catch (error) {
        console.error("error while saving bookmarks", error);
    }
}


const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState : loadBookmarksFromLocalStorage(),
  reducers: {
    addBookmark: (state, action) => {
      // console.log(state);
      const newState = [...state, action.payload]
      // console.log(newState);
      saveBookmarksToLocalStorage(newState);
      return newState;
    },
    removeBookmark: (state, action) => {
      const newState = state.filter((item) => item.url !== action.payload.url);
      saveBookmarksToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
