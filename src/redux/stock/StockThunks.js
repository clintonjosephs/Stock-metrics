import {
  loadStockMetrics,
  loadCompanyDetails,
  loadCompanyStatement,
  apiError,
} from './StockActions';
import fetchApiCall from '../../utils/api';

const endpoint = 'https://financialmodelingprep.com/api/v3/';
const apiKey = 'ccdf8ccdd1e7c1ce0b485d11b55d46ad';

// asyncronous actions
export const fetchStockMetrics = () => async (dispatch) => {
  try {
    const response = await fetchApiCall(
      `${endpoint}stock_market/actives?limit=20&apikey=${apiKey}`,
    );
    const data = response.map(
      ({
        symbol, name, change, price, changesPercentage,
      }) => ({
        id: symbol,
        change,
        companyName: name,
        price,
        changesPercentage,
      }),
    );
    dispatch(apiError(false));
    dispatch(loadStockMetrics(data));
  } catch (err) {
    dispatch(apiError(true));
    throw new Error(err);
  }
};

export const fetchCompanyDetails = (companySymbol) => async (dispatch) => {
  try {
    const data = await Promise.all([
      fetchApiCall(`${endpoint}profile/${companySymbol}?apikey=${apiKey}`),
      fetchApiCall(
        `${endpoint}income-statement/${companySymbol}?limit=120&apikey=${apiKey}`,
      ),
    ]);
    dispatch(loadCompanyDetails(data[0]));
    dispatch(loadCompanyStatement(data[1]));
  } catch (err) {
    dispatch(apiError(true));
    throw new Error(err);
  }
};
