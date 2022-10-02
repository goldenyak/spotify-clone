import { combineReducers } from "redux";
import { playerReducer } from "./playerReducer";
import { trackReducer } from "./trackReducer";

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: trackReducer
});

export type RootState = ReturnType<typeof rootReducer>