// action addresses

const LOAD_STOCK_METRICS = 'stockMetrics/stock/LOAD_STOCK_METRICS';
const LOAD_COMPANY_DETAILS = 'stockMetrics/stock/LOAD_COMPANY_DETAILS';
const LOAD_INCOME_STATEMENT = 'stockMetrics/stock/LOAD_INCOME_STATEMENT';
const FILTER_COMPANIES = 'stockMetrics/stock/FILTER_COMPANIES';

// initial state of the store data
const metricsData = {
  metrics: [], details: [], statement: [], dataWorker: [],
};

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

export const filterCompanies = (payload) => ({
  type: FILTER_COMPANIES,
  payload,
});

// reducers

const metricsDataReducer = (state = metricsData, { type, payload }) => {
  switch (type) {
    case LOAD_STOCK_METRICS:
      return { ...state, metrics: [...payload], dataWorker: [...payload] };
    case LOAD_COMPANY_DETAILS:
      return { ...state, details: [...payload] };
    case LOAD_INCOME_STATEMENT:
      return { ...state, statement: [...payload] };
    case FILTER_COMPANIES:
      if (payload === '') {
        return { ...state, dataWorker: [...state.metrics] };
      }
      return {
        ...state,
        dataWorker: [...state.metrics.filter(({ companyName }) => companyName.toLowerCase()
          .includes(payload.toLowerCase()))],
      };

    default:
      return state;
  }
};

export default metricsDataReducer;
