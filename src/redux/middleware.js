import { CREATE_POST } from "./types";
import { showAlert } from './actions';

const forbedden = [ 'fuck', 'php', 'spam'];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
        return function(action) {
            if(action.type === CREATE_POST) {
                const found = forbedden.filter(word => action.payload.title.includes(word));
                if(found.length) {
                    return dispatch(showAlert('В используете плохие слова'))
                }
            }
            return next(action)
        }
    }
}