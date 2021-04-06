import { CREATE_POST, FETCH_POSTS } from './types';
// в данном файле в зависимости от типа действия action выполняем ту или иную логику

//задаем начальное состояние для постов
const initialState = {
    posts: [],
    fetchedPost: []
};
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            //action.payload - посты
            return { ...state, posts: state.posts.concat([action.payload]) };
        case FETCH_POSTS:
            return { ...state, fetchedPost: action.payload };
        default:
            return state;
    }
};