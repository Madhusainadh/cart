import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import { cartreducer } from "./Cartstore/cart.reducer"
import thunk from "redux-thunk"
const reduxcers = combineReducers({
    cart:cartreducer
})

export const store = legacy_createStore(reduxcers,applyMiddleware(thunk))