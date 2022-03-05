import { loadStockMetrics, loadCompanyDetails, loadCompanyStatement } from './StockActions';
import fetchApiCall from '../../utils/api';

const endpoint = 'https://financialmodelingprep.com/api/v3/';
const apiKey = 'ccdf8ccdd1e7c1ce0b485d11b55d46ad';

// asyncronous actions
export const fetchStockMetrics = () => async (dispatch) => {
  const data = await fetchApiCall(`${endpoint}stock_market/actives?limit=20&apikey=${apiKey}`);
  dispatch(loadStockMetrics(data));
};

export const fetchCompanyDetails = (companySymbol) => async (dispatch) => {
  const data = await fetchApiCall(`${endpoint}profile/${companySymbol}?apikey=${apiKey}`);
  dispatch(loadCompanyDetails(data));
};

export const fetchCompanyIncomeStatement = (companySymbol) => async (dispatch) => {
  const data = await fetchApiCall(`${endpoint}income-statement/${companySymbol}?limit=120&apikey=${apiKey}`);
  dispatch(loadCompanyStatement(data));
};
