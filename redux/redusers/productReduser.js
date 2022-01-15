import { ADD_ITEM, CLEAR_DATA, REMOVE_ITEM } from "../actions";


const reducer = ( state = [], action) => {
    switch(action.type){
        case ADD_ITEM:
            return [
                ...state,
                action.data
            ];
        case REMOVE_ITEM:
            return [
                ...state.filter(i => i != action.data)
            ];
        case CLEAR_DATA:
            return [];
        default:
            return state
    }
};
export default reducer;