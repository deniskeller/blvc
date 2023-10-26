import { configureStore } from '@reduxjs/toolkit';
import { sidebarSlice } from './sidebar/reducer';

export const setupStore = () => {
	return configureStore({
		reducer: {
			sidebar: sidebarSlice.reducer,
		},
	});
}
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];