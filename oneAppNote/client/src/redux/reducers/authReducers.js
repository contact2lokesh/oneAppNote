import {
  GET_LOGIN_PENDING,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_ERROR,
  GET_REGISTER_PENDING,
  GET_REGISTER_SUCCESS,
  GET_REGISTER_ERROR,
} from "./type";

const initialState = {
  getLoginData: {},
  getRegisterData: {
  },
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        getLoginData: payload,
        error: null,
      };
    case GET_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        getLoginData: {},
        error: payload,
      };

    default:
      return state;
  }
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTER_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_REGISTER_SUCCESS:
      return {
        loading: false,
        getRegisterData: action.payload,
        error: null,
      };
    case GET_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        getRegisterData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
