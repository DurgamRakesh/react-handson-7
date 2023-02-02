import { createSlice } from "@reduxjs/toolkit";


const DataSlice = createSlice({
    name: 'DataSlice',
    initialState: [
        { name:'Rakesh', age:23, course:'MERN', batch:'22' },
        { name:'Vishnu', age:25, course:'Front-end', batch:'23' },
        { name:'Ansar', age:26, course:'MEAN', batch:'20' },
        { name:'Santhosh', age:24, course:'Back-End', batch:'22' },
        { name:'Srikanth', age:21, course:'MEARN', batch:'20 '}
    ],
    reducers: {
        EditData:(state,action) =>{
            state[action.payload.index] = action.payload.newobj;
            console.log(state);
            return (state);
        },
        AddData:(state,action) =>{
            state.push(action.payload)
            console.log(state);
            return (state);
        }
    }
})
export const { EditData, AddData} = DataSlice.actions;
export default DataSlice.reducer;