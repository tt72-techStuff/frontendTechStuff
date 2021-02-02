import axios from 'axios';
import axiosAuth from '../../utils/axiosAuth';
// import { axiosLogin } from '../../../utils/axiosSecret';

//*****action types****

//Profile actions
export const FETCH_CURRENT_USER_START = 'FETCH_CURRENT_USER_START';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';
//profile item actions
export const FETCH_CURRENT_USER_ITEMS_START = 'FETCH_CURRENT_USER_ITEMS_START';
export const FETCH_CURRENT_USER_ITEMS_SUCCESS = 'FETCH_CURRENT_USER_ITEMS_SUCCESS';
export const FETCH_CURRENT_USER_ITEMS_FAILURE = 'FETCH_CURRENT_USER_ITEMS_FAILURE';
//Login actions
export const POST_USER_LOGIN_START = 'POST_USER_LOGIN_START';
export const POST_USER_LOGIN_SUCCESS = 'POST_USER_LOGIN_SUCCESS';
export const POST_USER_LOGIN_FAILURE = 'POST_USER_LOGIN_FAILURE';
//Logout actions
export const FETCH_USER_LOGOUT_START = 'FETCH_USER_LOGOUT_START';
export const FETCH_USER_LOGOUT_SUCCESS = 'FETCH_USER_LOGOUT_SUCCESS';
export const FETCH_USER_LOGOUT_FAILURE = 'FETCH_USER_LOGOUT_FAILURE';
//User item add action
export const POST_USER_ITEM_START = 'POST_USER_ITEM_START';
export const POST_USER_ITEM_SUCCESS = 'POST_USER_ITEM_SUCCESS';
export const POST_USER_ITEM_FAILURE = 'POST_USER_ITEM_FAILURE';
//user item delete actions
export const DELETE_ITEM_BY_ID_START = 'DELETE_ITEM_BY_ID_START';
export const DELETE_ITEM_BY_ID_SUCCESS = 'DELETE_ITEM_BY_ID_SUCCESS';
export const DELETE_ITEM_BY_ID_FAILURE = 'DELETE_ITEM_BY_ID_FAILURE';
//user item edit by id actions
export const PUT_ITEM_BY_ID_START = 'PUT_ITEM_BY_ID_START';
export const PUT_ITEM_BY_ID_SUCCESS = 'PUT_ITEM_BY_ID_SUCCESS';
export const PUT_ITEM_BY_ID_FAILURE = 'PUT_ITEM_BY_ID_FAILURE';
//create new user actions
export const POST_NEW_USER_START = 'POST_NEW_USER_START';
export const POST_NEW_USER_SUCCESS = 'POST_NEW_USER_SUCCESS';
export const POST_NEW_USER_FAILURE = 'POST_NEW_USER_FAILURE';
//login actions
export const CONFIRM_LOGGED_IN = 'CONFIRM_LOGGED_IN';
export const REJECT_LOGGED_IN = 'REJECT_LOGGED_IN';


//action creators


export const fetchCurrentUser = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CURRENT_USER_START });

		axiosAuth().get('users/current') // change per api info
			.then((res) => {
				dispatch({
					type: FETCH_CURRENT_USER_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_CURRENT_USER_FAILURE,
					payload: err.message
				})
			})
	}
}


export const fetchCurrentUserRecipes = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_CURRENT_USER_ITEMS_START });

		axiosAuth().get('recipes/currentuser') // change per api info
			.then((res) => {
				dispatch({
					type: FETCH_CURRENT_USER_ITEMS_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_CURRENT_USER_ITEMS_FAILURE,
					payload: err.message
				})
			})
	}
}

// export const postUserLogin = (username, password) => {
// 	return (dispatch) => {
// 		dispatch({ type: POST_USER_LOGIN_START });

// 		axiosLogin(username, password) // change per api info
// 			.then((res) => {
// 				console.log(res.data.access_token);
// 				const stringifiedToken = JSON.stringify(res.data.access_token)
// 				window.localStorage.setItem('token', stringifiedToken)
// 				dispatch({
// 					type: POST_USER_LOGIN_SUCCESS,
// 					payload: res.data.access_token
// 				})
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				dispatch({
// 					type: POST_USER_LOGIN_FAILURE,
// 					payload: err.message
// 				})
// 			})
// 	}
// }

export const confirmUserLoggedIn = () => {
	return ({
		type: CONFIRM_LOGGED_IN,
		payload: true
	})
}

export const rejectUserLoggedIn = () => {
	return ({
		type: REJECT_LOGGED_IN,
		payload: false
	})
}

export const fetchUserLogout = () => {
	return (dispatch) => {
		dispatch({ type: FETCH_USER_LOGOUT_START })

		axiosAuth().get('/logout') // change per api info
			.then((res) => {
				window.localStorage.removeItem('token')
				dispatch({
					type: FETCH_USER_LOGOUT_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: FETCH_USER_LOGOUT_FAILURE,
					payload: err.message
				})
			})
	}
}


export const postUserItem = (newRecipe) => {
	return (dispatch) => {
		dispatch({ type: POST_USER_ITEM_START });

		axiosAuth().post('recipes', newRecipe) //change per api info
			.then((res) => {
				dispatch({
					type: POST_USER_ITEM_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: POST_USER_ITEM_FAILURE,
					payload: err.message
				})
			})
	}
}

export const deleteItemById = (id) => {
	return (dispatch) => {
		dispatch({ type: DELETE_ITEM_BY_ID_START });

		axiosAuth().delete(`item/${id}`) // change per api info
			.then((res) => {
				dispatch({
					type: DELETE_ITEM_BY_ID_SUCCESS,
					payload: res.data
				})
				window.location.reload();
			})
			.catch((err) => {
				dispatch({
					type: DELETE_ITEM_BY_ID_FAILURE,
					payload: err.message
				})
			})
	}
}

export const putItemById = (id, updateFields) => {
	return (dispatch) => {
		dispatch({ type: PUT_ITEM_BY_ID_START });

		axiosAuth().put(`recipe/${id}`, updateFields) // change per api info
			.then((res) => {
				dispatch({
					type: PUT_ITEM_BY_ID_SUCCESS,
					payload: res.data
				})
			})
			.catch((err) => {
				dispatch({
					type: PUT_ITEM_BY_ID_FAILURE,
					payload: err.message
				})
			})
	}
}


export const postNewUser = (newUser) => {
	return (dispatch) => {
		dispatch({ type: POST_NEW_USER_START });

		axios.post('https://tt72-cookbook.herokuapp.com/createnewuser', newUser) // change per api info
			.then((res) => {
				const stringifiedToken = JSON.stringify(res.data.access_token)
				window.localStorage.setItem('token', stringifiedToken)
				dispatch({
					type: POST_NEW_USER_SUCCESS,
					payload: res.data.access_token
				})
			})
			.catch((err) => {
				dispatch({
					type: POST_NEW_USER_FAILURE,
					payload: err.message
				})
			})
	}
}