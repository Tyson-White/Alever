import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: 'user',
	initialState: {
		isAuth: false,

	},
	reducers: {
		setIsAuth(state) {
			state.isAuth = !state.isAuth
		}
	}
})

export const {setIsAuth} = UserSlice.actions

export default UserSlice.reducer