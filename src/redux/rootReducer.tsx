import {combineReducers} from '@reduxjs/toolkit';
import app_slice from './slices/app_slice';

const rootReducer = combineReducers({
  app: app_slice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
