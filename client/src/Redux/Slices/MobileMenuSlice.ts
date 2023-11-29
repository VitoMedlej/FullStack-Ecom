import {createSlice} from '@reduxjs/toolkit'

export interface SideBarState {
    isMenuOpen : boolean
}

const initialState : SideBarState = {
    isMenuOpen : false
}

export const SideBarSlice = createSlice({
    name: 'isSideBar',
    initialState,
    reducers: {

        SetMobileMenuState: (state, action) => {
            
            state.isMenuOpen = action.payload 
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    SetMobileMenuState
} = SideBarSlice.actions

export default SideBarSlice.reducer