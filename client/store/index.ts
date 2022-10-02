import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
// import { legacy_createStore as createStore, Store } from "redux";
import { rootReducer, RootState } from "./reducers";
import thunk from "redux-thunk";
//
//
// // @ts-ignore
// const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer);
//
// // @ts-ignore
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});



const makeStore = (context: Context) => createStore(rootReducer, applyMiddleware(thunk));
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

// // @ts-ignore
// const makeStore: MakeStore<RootState>
//   = (context: Context) => createStore(rootReducer, applyMiddleware(thunk));
//
// // export an assembled wrapper
// // @ts-ignore
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});