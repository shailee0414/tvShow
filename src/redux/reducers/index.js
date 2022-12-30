import { combineReducers } from "redux";

const showsReducers=(state=[],action)=>{
    switch(action.type){
        case 'FETCH_SHOWS':
            return action.payload;
        default:
            return state;
    };
}
export default combineReducers({
    shows:showsReducers,
});