import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface MindTree {
  mindTreeList: any;
}

const initialState: MindTree = {
  mindTreeList: [],
};

export const mindTreeSlice = createSlice({
  name: 'mindTree',
  initialState,
  reducers: {
    setMindTree: (state, action: PayloadAction<any>) => {
      state.mindTreeList = action.payload;
    },
    resetMindTreeSlice: () => initialState,
  },
});

export const {setMindTree, resetMindTreeSlice} = mindTreeSlice.actions;
export default mindTreeSlice.reducer;
