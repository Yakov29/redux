import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = (state = 0, action) => {

    console.log(action)
    if (action.type === "newNumber") {
        state = state + 1
    } else if (action.type === "oldNumber") {
        // state = action.payload
        state = state - 1
    }
    return state
}


const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)