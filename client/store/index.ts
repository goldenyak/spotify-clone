
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore} from "redux";
import { rootReducer, RootState } from "./reducers";

// @ts-ignore
const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer);

// @ts-ignore
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});