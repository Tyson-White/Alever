import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './slices/UserSlice'
import PopupSlice from './slices/PopupSlice'
import cardSlice from './slices/cardSlice'

export default configureStore({
  reducer: {
		user: UserSlice,
		popup: PopupSlice,
		card: cardSlice
	}
})