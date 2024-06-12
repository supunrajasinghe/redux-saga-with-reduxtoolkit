import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../../models/user.ts";

const initialState: UserState = {
    users: [],
    isLoading: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        getUsersFetch: (state) => {
            state.isLoading = true;
        },
        getUsersSuccess: (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        },
        getUsersFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const {getUsersFetch, getUsersSuccess, getUsersFailure} = userSlice.actions;

export default userSlice.reducer;
