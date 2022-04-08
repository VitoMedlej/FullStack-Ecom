import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'
import BackDropSlice from './Slices/BackDropSlice'
import SideBarSlice from './Slices/SideBarSlice'
import ProductsSlice from './Slices/ProductsSlice'
import UserSlice from './Slices/UserSlice'

export const store = configureStore({
  reducer: {
    isCartOpen : CartSliceReducer,
    isBackDrop : BackDropSlice,
    isSideBar : SideBarSlice,
    ProductsArray : ProductsSlice,
    userInfo : UserSlice

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch