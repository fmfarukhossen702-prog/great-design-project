import { createSlice } from '@reduxjs/toolkit'




export const dataStore = createSlice({
  name: 'dataStore',

  initialState:{
    pageActive : "home"
  },
  reducers: {
    pageActiveReducer: (state,action) => {
        state.pageActive = action.payload

    },

 
}})

// Action creators are generated for each case reducer function
export const { pageActiveReducer } = dataStore.actions;


export default dataStore.reducer;