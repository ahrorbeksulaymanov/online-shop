import { combineReducers } from "redux";
import productReduser from "./productReduser"

const redusers = combineReducers({
    product: productReduser
})

export default redusers;