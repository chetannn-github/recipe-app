import { createSlice } from "@reduxjs/toolkit";

const ReciepeSlice = createSlice({
    name:'reciepeSlice',
    initialState:null,
    reducers:{
        addReciepe:(state,action) =>{
            return state = action.payload;
        }
    }
})

export default ReciepeSlice.reducer;
export const {addReciepe} = ReciepeSlice.actions;