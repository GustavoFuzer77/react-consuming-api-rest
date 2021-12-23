import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line import/no-anonymous-default-export
export default reducer => {
  const persistedReducers = persistReducer({
    key: 'persist',
    storage,
    whitelist: ['authReducer']
  }, reducer);

  return persistedReducers;
}