import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import * as types from '../types';
import api from '../../../services/axios';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import { get } from 'lodash'
import axios from 'axios';

function* loginReq({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload)
    yield put(actions.loginSuccess({ ...response.data }));

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    toast.success('logado!');
    history.push(payload.prevPath);

  } catch (e) {
    toast.error('usuario ou senha inválidos')
    yield put(actions.loginFailure())
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'authReducer.token')
  if(!token) return 
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginReq),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])