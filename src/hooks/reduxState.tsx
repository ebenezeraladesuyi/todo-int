
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iUser } from "../types/interface";


const initialState = {
    currentUser: {} as iUser | null,
};

const ReduxState = createSlice({
    name: "istand",
    initialState,
    reducers: {
        User: (state, { payload } : PayloadAction<iUser>) => 
        {
            state.currentUser = payload
        },

        logout: (state) => {
            state.currentUser = null;
        }
    },
});

export const { User, logout } = ReduxState.actions;

export default ReduxState.reducer;