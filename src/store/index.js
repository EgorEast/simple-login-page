import { configureStore } from '@reduxjs/toolkit';
import profileDataSlice from './profileDataSlice';

export const store = configureStore({
	reducer: {
		profileData: profileDataSlice,
	},
});
