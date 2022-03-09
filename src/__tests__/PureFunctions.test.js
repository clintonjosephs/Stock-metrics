import metricsDataReducer, * as Actions from '../redux/stock/StockActions';
import MockDetails from '../__mocks__/MockDetails';
import MockData from '../__mocks__/MockMetrics';

describe('Test all synchronous actions', () => {
  const Data = MockData.map(
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

  const metricsData = {
    metrics: [],
    details: [],
    statement: [],
    dataWorker: [],
    error: false,
  };

  const dataPush = metricsDataReducer(
    metricsData,
    Actions.loadStockMetrics(Data),
  );

  it('load all the active stock companies', () => {
    expect(dataPush.metrics).toEqual(Data);
  });

  it('loads all company details', () => {
    const { details } = metricsDataReducer(
      dataPush,
      Actions.loadCompanyDetails(MockDetails.details),
    );
    expect(details.length).toBe(1);
    expect(details[0].companyName).toEqual('Apple Inc.');
  });

  it('loads all company income statement', () => {
    const { statement } = metricsDataReducer(
      dataPush,
      Actions.loadCompanyStatement(MockDetails.statement),
    );
    expect(statement.length).toBe(5);
    expect(statement[0].symbol).toEqual('AAPL');
  });

  it('test filter stock companies', () => {
    const { dataWorker } = metricsDataReducer(
      dataPush,
      Actions.filterCompanies('ford'),
    );
    expect(dataWorker.length).toBeLessThan(dataPush.dataWorker.length);
    expect(dataWorker[0]).toEqual(dataPush.metrics[0]);
  });

  it('test that company details is reset', () => {
    const { details, statement } = metricsDataReducer(
      dataPush,
      Actions.resetDetails,
    );
    expect(details).toEqual([]);
    expect(statement).toEqual([]);
  });

  test('syncronous error redux action returns false', () => {
    const { error } = metricsDataReducer(dataPush, Actions.apiError(false));
    expect(error).toBeFalsy();
  });

  test('syncronous error redux action retruns true', () => {
    const { error } = metricsDataReducer(dataPush, Actions.apiError(true));
    expect(error).toBeTruthy();
  });
});
