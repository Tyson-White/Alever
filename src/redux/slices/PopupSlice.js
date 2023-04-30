import { createSlice } from "@reduxjs/toolkit";

export const PopupSlice = createSlice({
	name: 'popup',
	initialState: {
		login: false,

	},
	reducers: {
		setLogin(state) {
			state.login = !state.login
		}
	}
})

export const {setLogin} = PopupSlice.actions

export default PopupSlice.reducer