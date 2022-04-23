import { configureStore } from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'
import BackDropSlice from './Slices/BackDropSlice'
import SideBarSlice from './Slices/SideBarSlice'
import ProductsSlice from './Slices/ProductsSlice'
import UserSlice from './Slices/UserSlice'
import LocalCartSlice from './Slices/LocalCartSlice'
import MobileMenuSlice from './Slices/MobileMenuSlice'

export const store = configureStore({
  reducer: {
    isCartOpen : CartSliceReducer,
    isBackDrop : BackDropSlice,
    isSideBar : SideBarSlice,
    ProductsArray : ProductsSlice,
    userInfo : UserSlice,
    LocalCart : LocalCartSlice,
    isMenuOpen : MobileMenuSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch