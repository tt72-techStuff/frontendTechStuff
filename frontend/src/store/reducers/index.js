import {
//Profile actions
FETCH_CURRENT_USER_START,
FETCH_CURRENT_USER_SUCCESS,
FETCH_CURRENT_USER_FAILURE,
//profile item actions
FETCH_CURRENT_USER_ITEMS_START,
FETCH_CURRENT_USER_ITEMS_SUCCESS,
FETCH_CURRENT_USER_ITEMS_FAILURE,
//Login actions
POST_USER_LOGIN_START,
POST_USER_LOGIN_SUCCESS,
POST_USER_LOGIN_FAILURE,
//Logout action
FETCH_USER_LOGOUT_START,
FETCH_USER_LOGOUT_SUCCESS,
FETCH_USER_LOGOUT_FAILURE,
//User item add action
POST_USER_ITEM_START,
POST_USER_ITEM_SUCCESS,
POST_USER_ITEM_FAILURE,
//user item delete actions
DELETE_ITEM_BY_ID_START,
DELETE_ITEM_BY_ID_SUCCESS,
DELETE_ITEM_BY_ID_FAILURE,
//user item edit by id actions
PUT_ITEM_BY_ID_START,
PUT_ITEM_BY_ID_SUCCESS,
PUT_ITEM_BY_ID_FAILURE,
//create new user actions
POST_NEW_USER_START,
POST_NEW_USER_SUCCESS,
POST_NEW_USER_FAILURE,
//login actions
CONFIRM_LOGGED_IN,
REJECT_LOGGED_IN,
} from '../actions/index';

const initialState = {
	isLoading: false,
	isLoggedIn: true,
	itemData: [],
	userData: {},
	newItemData: {},
	error: ''
}

/* 
1. Fetch Items start
2. Fecth Items successfully
3. Fetch Items Fail
*/

const reducer = (state = initialState, action) => {
    switch (action.type) {

        //user info
        case FETCH_CURRENT_USER_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_CURRENT_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				userData: action.payload,
				error: ''
			}

		case FETCH_CURRENT_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
            }
            
        //user items
        case FETCH_CURRENT_USER_ITEMS_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_CURRENT_USER_ITEMS_SUCCESS:
			return {
				...state,
				isLoading: false,
				recipeData: action.payload,
				error: ''
			}

		case FETCH_CURRENT_USER_ITEMS_FAILURE:
			return {
				...state,
				isLoading: false,
                error: action.payload
            }

        //login
		case POST_USER_LOGIN_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_USER_LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: '',
			}

		case POST_USER_LOGIN_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
            }
            
        //logout
		case FETCH_USER_LOGOUT_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_USER_LOGOUT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: '',
			}

		case FETCH_USER_LOGOUT_FAILURE:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: action.payload
            }
            
        //new item
		case POST_USER_ITEM_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_USER_ITEM_SUCCESS:
			return {
				...state,
				isLoading: false,
				newRecipeData: action.payload,
				error: ''
			}

		case POST_USER_ITEM_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
            }
            
        //delete item
		case DELETE_ITEM_BY_ID_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case DELETE_ITEM_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: ''
			}

		case DELETE_ITEM_BY_ID_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
            }
            
        //update ITEM
		case PUT_ITEM_BY_ID_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case PUT_ITEM_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				newRecipeData: action.payload,
				error: ''
			}

		case PUT_ITEM_BY_ID_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
            }

        //login authentication
		case CONFIRM_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload
			}

		case REJECT_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.payload
			}
            
        //signup
		case POST_NEW_USER_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case POST_NEW_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				error: ''
			}

		case POST_NEW_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				error: action.payload
            }
        
        default:
            return state;
            
    }
        
}


export default reducer;