import { combineReducers } from "redux";
import actionType from "./../constant/constant";
const defaultState = {
  contactpopup: false,
  loginpopup: false,
  registerpopup: false,
  availability: false,
  storage: false,
  equipment: false,
  confirmation: false,
  basic: false,
  profile: false,
  fav: false,
  kitchen: false,
  kitchenData: {},
  addKitchenData: {},
  isRegister: '',
  isSearch: false,
  preview: false,
  userDetails: ''
};
const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CONTACT_POPUP: {
      return { ...state, contactpopup: action.payload };
    }
    case actionType.LOGIN_POPUP: {
      return { ...state, loginpopup: action.payload };
    }
    case actionType.REGISTER_POPUP: {
      return { ...state, registerpopup: action.payload };
    }
    case actionType.AVAILABILITY: {
      return { ...state, availability: action.payload };
    }
    case actionType.STORAGE: {
      return { ...state, storage: action.payload };
    }
    case actionType.EQUIPMENT: {
      return { ...state, equipment: action.payload };
    }
    case actionType.CONFIRMATION: {
      return { ...state, confirmation: action.payload };
    }
    case actionType.BASIC: {
      return { ...state, basic: action.payload };
    }
    case actionType.KITCHEN_DATA: {
      return { ...state, kitchenData: action.payload };
    }
    case actionType.PROFILE: {
      return { ...state, profile: action.payload };
    }
    case actionType.FAVORITES: {
      return { ...state, fav: action.payload };
    }
    case actionType.KITCHEN: {
      return { ...state, kitchen: action.payload };
    }
    case actionType.ADDKITCHENDATA: {
      return { ...state, addKitchenData: action.payload };
    }
    case actionType.IS_REGISTER: {
      return { ...state, isRegister: action.payload };
    }
    case actionType.IS_SEARCH: {
      return { ...state, isSearch: action.payload };
    }
    case actionType.PREVIEW_KITCHEN: {
      return { ...state, preview: action.payload };
    }
    case actionType.USER_DETAILS: {
      return { ...state, userDetails: action.payload };
    }
    default:
      return state;
  }
};
export default combineReducers({
  appReducer: appReducer,
});
