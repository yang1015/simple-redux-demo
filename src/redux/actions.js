export const ADD_TO_LIST = 'ADD_TO_LIST';
export const DELETE_PERSON = 'DELETE_PERSON';
export const REVERSE_START = "REVERSE_START";
export const REVERSE_SUCCEED = "REVERSE_SUCCEED";

 
export function addToList(person) {
	return {
		type: ADD_TO_LIST,
		person
	}
}

export function deletePerson(index) {
	return {
		type: DELETE_PERSON,
		index
	}
}

export function reversePersonList(personList) {

	return dispatch => {
		dispatch(reverseStart());
		setTimeout(function(){

		 	dispatch(reverseSucceed(personList))
		}, 1000)

	}
}

export function reverseStart() { //不需要参数
	return {
		type: REVERSE_START
	}
}

export function reverseSucceed(personList) {
	return {
		type: REVERSE_SUCCEED,
		personList
	}
}


 
