import { createSlice } from "@reduxjs/toolkit";


let ProductSlice = createSlice({
    name:"Card",
    initialState:[],
    reducers:{
        add(state,action){
           state.push(action.payload) 
        },
        remove(state,action){
    let i = state.findIndex( (x) => x.id == action.payload)
    if(i > -1){
        state.splice(i,1)
    }        
        },
        increment(state,action){

        },
        decrement(state,action){

        }
    }
})

export const {add , remove , increment ,decrement} = ProductSlice.actions;
export default ProductSlice.reducer