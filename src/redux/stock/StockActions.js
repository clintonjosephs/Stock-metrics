// action addresses

const LOAD_STOCK_METRICS = 'stockMetrics/stock/LOAD_STOCK_METRICS';
const LOAD_COMPANY_DETAILS = 'stockMetrics/stock/LOAD_COMPANY_DETAILS';
const LOAD_INCOME_STATEMENT = 'stockMetrics/stock/LOAD_INCOME_STATEMENT';
const FILTER_COMPANIES = 'stockMetrics/stock/FILTER_COMPANIES';
const RESET_DETAILS = 'stockMetrics/stock/RESET_DETAILS';
const ERROR_STATUS = 'stockMetrics/stock/ERROR_STATUS';

// initial state of the store data
const metricsData = {
  metrics: [],
  details: [],
  statement: [],
  dataWorker: [],
  error: false,
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

export const resetDetails = () => ({
  type: RESET_DETAILS,
});

export const apiError = (payload) => ({
  type: ERROR_STATUS,
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
        dataWorker: [
          ...state.metrics.filter(({ companyName }) => companyName
            .toLowerCase().includes(payload.toLowerCase())),
        ],
      };
    case RESET_DETAILS:
      return { ...state, statement: [], details: [] };
    case ERROR_STATUS:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default metricsDataReducer;
