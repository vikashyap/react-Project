import { combineReducers } from 'redux';
import { routerReducer } from  'react-router-redux';

//Import reducers to combine them
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
	posts, 
	comments, 
	routing: routerReducer
});

export default rootReducer;