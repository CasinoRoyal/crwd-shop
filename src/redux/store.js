import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import reducer from './rootReducer';

const middlewares = [logger]

export const store = createStore(reducer, applyMiddleware( ...middlewares));

export const persistor = persistStore(store);