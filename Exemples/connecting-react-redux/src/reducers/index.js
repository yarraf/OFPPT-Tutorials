import {ADD_ARTICLE} from '../constants/action-types';

const initialState = {
    articles:[],
    remoteArticles:[]
};
const rootReducer = (state=initialState,action)=>{
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload)
        });
      }

      if (action.type === "DATA_LOADED") {
        console.log('reducer: '+action.payload.length);
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });
      }
    return state;
}



export default rootReducer;