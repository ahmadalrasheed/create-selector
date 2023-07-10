import {
  createSlice,
  createAsyncThunk,
  current,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: undefined,
  loading: false,
  entities: undefined,
  error: undefined,
  countOfAvatarClick: 0,
};
const usersURL = process.env.REACT_APP_USERS_URL;
export const getUsers = createAsyncThunk("users/getusers", async () => {
  const { data } = await axios.get(usersURL);
  let enhancedData = data.data;
  enhancedData.map((item) => {
    item.countOfImageClick = 0;
  });
  return enhancedData;
});
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.entities = undefined;
      state.status = undefined;
      state.loading = false;
      state.entities = undefined;
      state.error = undefined;
    },
    countOfAvatarClick: (state, action) => {
      state.entities.find((item) => {
        return item.id == action.payload && item.countOfImageClick++;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.loading = false;
        state.error = action.error.message;
        state.entities = undefined;
        console.log("actions", action);
      })
      .addCase(getUsers.pending, (state) => {
        state.status = "pending";
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeed";
        state.loading = false;
        state.entities = action.payload;
        state.error = undefined;
      });
  },
});
const selectUsers = (state) => state.users;

export const usersSelector = createSelector(selectUsers, (state) => {
  return {
    users: state?.entities,
    error: state?.error,
    loading: state?.loading,
  };
});
export const { reset, countOfAvatarClick } = usersSlice.actions;

export default usersSlice;
