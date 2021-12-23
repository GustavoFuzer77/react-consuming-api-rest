import { createStore , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'
import persitedReducer  from './modules/reduxPersist';


import rootSaga from './modules/rootSagas';
import combine from './modules/rootReducer';
const sagaMiddleware = createSagaMiddleware()


const store = createStore(persitedReducer(combine), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);
export default store;