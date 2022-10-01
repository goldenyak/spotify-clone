import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore, Store } from "redux";
// import { legacy_createStore as createStore, Store } from "redux";
import { rootReducer, RootState } from "./reducers";
//
//
// // @ts-ignore
// const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer);
//
// // @ts-ignore
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

const makeStore = (context: Context) => createStore(rootReducer);
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});