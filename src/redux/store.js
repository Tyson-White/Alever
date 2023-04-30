import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import PopupSlice from './slices/PopupSlice'

export default configureStore({
  reducer: {
		user: UserSlice,
		popup: PopupSlice
	}
})