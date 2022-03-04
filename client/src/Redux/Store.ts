import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'
import BackDropSlice from './Slices/BackDropSlice'
import SideBarSlice from './Slices/SideBarSlice'


export const store = configureStore({
  reducer: {
    isCartOpen : CartSliceReducer,
    isBackDrop : BackDropSlice,
    isSideBar : SideBarSlice,


  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch