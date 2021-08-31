import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  value: object;
}

const initialState: initialState = {
  value: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.value = action.payload;
    },
    requestToGetdata: () => {},
  },
});

export const { getData, requestToGetdata } = dataSlice.actions;

export const selectCount = (state) => state.counter.value;

export default dataSlice.reducer;
