import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: 'card',
	initialState: {
		cardsList: []
	},
	reducers: {
        setCards(state, actions) {
            state.cardsList = actions.payload
        }
	}
})

export const {setCards} = cardSlice.actions

export default cardSlice.reducer