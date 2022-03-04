import {createSlice} from '@reduxjs/toolkit'

export interface BackDropState {
    isBackDrop : boolean
}

const initialState : BackDropState = {
    isBackDrop: false
}

export const BackDropSlice = createSlice({
    name: 'isBackDrop',
    initialState,
    reducers: {

        toggleBackDropState: (state, action) => {

            state.isBackDrop = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    toggleBackDropState
} = BackDropSlice.actions

export default BackDropSlice.reducer