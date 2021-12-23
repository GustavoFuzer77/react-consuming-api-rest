import { all } from 'redux-saga/effects';

import loginReq from './auth/sagas';

export default function* rootSaga(){
  return yield all([loginReq])
}