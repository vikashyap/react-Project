//increment
export const increment = (index) => {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//add comment
export const addComment = (id, author, comment) => {
	return {
		type: 'ADD_COMMENT',
		id,
		author,
		comment
	}
}

//remove comment
export const removeComment = (id, i) => {
	return {
		type: 'REMOVE_COMMENT',
		i,
		id
	}
}
