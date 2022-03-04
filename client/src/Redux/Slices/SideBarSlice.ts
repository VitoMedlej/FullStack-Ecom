import {createSlice} from '@reduxjs/toolkit'

export interface SideBarState {
    isSideBar : boolean
}

const initialState : SideBarState = {
    isSideBar: false
}

export const SideBarSlice = createSlice({
    name: 'isSideBar',
    initialState,
    reducers: {

        toggleSideBarState: (state, action) => {
            
            state.isSideBar = action.payload 
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    toggleSideBarState
} = SideBarSlice.actions

export default SideBarSlice.reducer