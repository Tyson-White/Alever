import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: 'user',
	initialState: {
		isAuth: false,
		activeUser: {
			userName: '',
			userEmail: ''
		}
	},
	reducers: {
		setIsAuth(state) {
			state.isAuth = !state.isAuth
		},
		setActiveUser(state, action) {
			state.activeUser = action.payload[0]

		}
	}
})

export const {setIsAuth, setActiveUser} = UserSlice.actions

export default UserSlice.reducer