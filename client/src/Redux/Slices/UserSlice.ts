import {createSlice} from '@reduxjs/toolkit'

export interface SideBarState {
    UserInfo ?: {
        id: string,
        username: string,
        email: string,
        token : string
    } | null
}

const initialState : SideBarState = {
    UserInfo: null
}

export const UserSlice = createSlice({
    name: 'UserInfo',
    initialState,
    reducers: {

        saveUser : (state, action) => {
            
            state.UserInfo = action.payload 
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    saveUser
} = UserSlice.actions

export default UserSlice.reducer