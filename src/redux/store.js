import {createStore} from "redux";

const rootReducer = (state = 0, action) => {
    return state
}

export const store = createStore(rootReducer)