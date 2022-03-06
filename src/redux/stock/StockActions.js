// action addresses

const LOAD_STOCK_METRICS = 'stockMetrics/stock/LOAD_STOCK_METRICS';
const LOAD_COMPANY_DETAILS = 'stockMetrics/stock/LOAD_COMPANY_DETAILS';
const LOAD_INCOME_STATEMENT = 'stockMetrics/stock/LOAD_INCOME_STATEMENT';

// initial state of the store data
const metricsData = { metrics: [], details: [], statement: [] };

// syncronous actions

export const loadStockMetrics = (payload) => ({
  type: LOAD_STOCK_METRICS,
  payload,
});

export const loadCompanyDetails = (payload) => ({
  type: LOAD_COMPANY_DETAILS,
  payload,
});

export const loadCompanyStatement = (payload) => ({
  type: LOAD_INCOME_STATEMENT,
  payload,
});

// reducers

const metricsDataReducer = (state = metricsData, { type, payload }) => {
  switch (type) {
    case LOAD_STOCK_METRICS:
      return { metrics: [...payload] };
    case LOAD_COMPANY_DETAILS:
      return { details: [...payload] };
    case LOAD_INCOME_STATEMENT:
      return { statement: [...payload] };
    default:
      return state;
  }
};

export default metricsDataReducer;
