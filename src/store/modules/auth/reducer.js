import api from '../../../services/axios';
import * as types from '../types';
import jwt from 'jsonwebtoken';

const initialState = {
  token: '',
  isLoggedIn: false,
  user: {},
  isLoading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      const newStateSuccess = { ...state }
      newStateSuccess.isLoggedIn = true;
      newStateSuccess.token = action.payload.token;
      newStateSuccess.user = jwt.decode(newStateSuccess.token, { json: true })
      return newStateSuccess;

    case types.LOGIN_FAILURE:
      delete api.defaults.headers.Authorization;
      const newStateFail = { ...initialState };
      return newStateFail;

    default: {
      return state
    }
  }
}