import { createSlice } from "@reduxjs/toolkit";

const ReciepeSlice = createSlice({
    name:'reciepeSlice',
    initialState:{
        recommended:null,
        favs:[],
    },
    reducers:{
        addReciepe:(state,action) =>{
            state.recommended= action.payload;
        },
        addFavs:(state,action) =>{
            state.favs.push(action.payload) ;
        },
        removeFavs:(state,action) =>{
            console.log(action.payload);
          state.favs=action.payload;
        },
        
    }
})

export default ReciepeSlice.reducer;
export const {addReciepe ,addFavs,removeFavs} = ReciepeSlice.actions;