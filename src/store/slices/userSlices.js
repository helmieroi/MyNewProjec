import { createSlice } from "@reduxjs/toolkit";
//import { setDataToLocalStorage, getDataToLocalStorage } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, //getDataToLocalStorage("user"),
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      // setDataToLocalStorage("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      //   setDataToLocalStorage("user", null);
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
