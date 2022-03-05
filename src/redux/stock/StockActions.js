// action addresses

const LOAD_STOCK_METRICS = 'stockMetrics/stock/LOAD_STOCK_METRICS';
const LOAD_COMPANY_DETAILS = 'stockMetrics/stock/LOAD_COMPANY_DETAILS';

// initial state of the store data
const metricsData = [{ metrics: [] }, { details: [] }];

// syncronous actions

export const loadStockMetrics = (payload) => ({
  type: LOAD_STOCK_METRICS,
  payload,
});

export const loadCompanyDetails = (payload) => ({
  type: LOAD_COMPANY_DETAILS,
  payload,
});

// reducers

const metricsDataReducer = (state = metricsData, { type, payload }) => {
  switch (type) {
    case LOAD_STOCK_METRICS:
      return { metrics: [...payload] };
    case LOAD_STOCK_METRICS:
      return { details: [...payload] };
    default:
      return state;
  }
};

export default metricsDataReducer;
