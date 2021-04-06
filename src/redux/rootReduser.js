import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { postsReducer } from './postsReducer';
// файл отвечает за то, чтобы все редюсеры были видны
export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});