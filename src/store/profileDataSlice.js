import { createSlice } from '@reduxjs/toolkit';

const profileDataSlice = createSlice({
	name: 'profileDataSlice',
	initialState: {
		login: 'developer21',
		password: '123456',
		isCorrectData: false,
		isLogin: false,
	},
	reducers: {
		setLogin(state, action) {
			state.login = action.payload;
		},
		setPassword(state, action) {
			state.password = action.payload;
		},
		setIsCorrectData(state, action) {
			state.isCorrectData = action.payload;
		},
		setIsLogin(state, action) {
			state.isLogin = action.payload;
		},
	},
});

export const { setLogin, setPassword, setIsCorrectData, setIsLogin } =
	profileDataSlice.actions;

export default profileDataSlice.reducer;
