import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import themeReducer from './features/themeSlice'
import { productApi } from './features/api/productApi'
// ...

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
      cart:cartReducer,
      theme:themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch