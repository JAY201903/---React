import { combineReducers, createStore } from 'redux'
import showdataReducer from './reducer/showdata'
// 示例：
// import XXReducer from './reducer/XXX'
const reducer = combineReducers({
    showdata:showdataReducer,
    // 如果有其他的直接在这加
    // XXX:XXReducer
});
const store = createStore(reducer);
export default store;