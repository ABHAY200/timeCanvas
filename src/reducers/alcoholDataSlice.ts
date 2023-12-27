import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AlcoholData {
  alcoholDataList: any;
}

const initialState: AlcoholData = {
  alcoholDataList: [],
};

export const alcoholDataSlice = createSlice({
  name: 'alcoholData',
  initialState,
  reducers: {
    setAlcoholDataList: (state, action: PayloadAction<any>) => {
      state.alcoholDataList = action.payload;
    },
    resetAlcoholDataSlice: () => initialState,
  },
});

export const {setAlcoholDataList, resetAlcoholDataSlice} =
  alcoholDataSlice.actions;
export default alcoholDataSlice.reducer;
