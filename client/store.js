import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import the root reducer
import rootReducer from './reducers/index';

//Import datas
import comments from './data/comments';
import posts from './data/posts';

//Default data
const defaultState = {
	posts,
	comments
};

const enhacers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhacers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;