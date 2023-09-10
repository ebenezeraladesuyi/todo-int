
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iUser } from "../types/interface";


const initialState = {
    currentUser: {} as iUser | null,
};

const ReduxState = createSlice({
    name: "todooo",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<any> ) => 
        {
            state.currentUser = action.payload
        },

        logout: (state) => {
            state.currentUser = null;
        }
    },
});

export const { setUser, logout } = ReduxState.actions;

export default ReduxState.reducer;