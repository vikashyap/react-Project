const postComments = (state = [], action) => {
	switch(action.type){
		case 'ADD_COMMENT':
			return [
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		case 'REMOVE_COMMENT':
			return [
				//from the start to the one we want to delete
				...state.slice(0, action.i),
				//after the deleted one, to the end
				...state.slice(action.i + 1)
			];
		default:
			return state;	
	}
}

const comments = (state = [], action) => {
	if (typeof action.id !== 'undefined') {
		return {
			//take the current state
			...state,
			//overwrite this post with a new one
			[action.id]: postComments(state[action.id], action)
		};
	}
	return state;
}

export default comments;