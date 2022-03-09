import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import metricsDataReducer from './stock/StockActions';
import { fetchStockMetrics } from './stock/StockThunks';

const reducer = combineReducers({
  metricsDataReducer,
});

// creating a store
const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchStockMetrics());

export default store;
