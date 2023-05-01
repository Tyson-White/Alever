import { createSlice } from "@reduxjs/toolkit";

export const PopupSlice = createSlice({
	name: 'popup',
	initialState: {
		login: false,
		register: false,
		profile: false,
	},
	reducers: {
		setLogin(state) {
			state.login = !state.login
		},
		setRegister(state) {
			state.register = !state.register
		},
		setProfile(state, action) {	
				state.profile = action.payload				
		},
		changeProfile(state) {
			state.profile = !state.profile
		}
	}
})

export const {setLogin, setRegister, setProfile, changeProfile} = PopupSlice.actions

export default PopupSlice.reducer