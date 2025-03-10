import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: true,
  },

  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// // Initial state: Check localStorage or system preference
// const getInitialTheme = () => {
//   if (localStorage.theme) return localStorage.theme;
//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// };

// const themeSlice = createSlice({
//   name: "theme",
//   initialState: {
//     theme: getInitialTheme(),
//   },
//   reducers: {
//     toggleTheme: (state) => {
//       state.theme = state.theme === "dark" ? "light" : "dark";
//     },
//   },
// });

// export const { toggleTheme } = themeSlice.actions;
// export default themeSlice.reducer;
