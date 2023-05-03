import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getSession } from "../../firebase/session";
const session = getSession()
export const UserSlice = createSlice({
	name: 'user',
	initialState: {
		isAuth: false,
		activeUser: {
			userName: '',
			userEmail: ''
		},
		isLoading: true
	},
	reducers: {
		setIsAuth(state) {
			state.isAuth = !state.isAuth
		},
		setActiveUser(state, action) {
			state.activeUser = action.payload		
		},
		setIsLoading(state, action) {
			state.isLoading = action.payload
		}
	}
})

export const {setIsAuth, setActiveUser, setIsLoading} = UserSlice.actions

export default UserSlice.reducer