// this file is for functions that helped format the receieved data.
export const sortObj = (data) => data.sort((a, b) => b.price - a.price);

export const sumPrices = (data) => data
  .reduce((value, { price }) => value + (price || 0), 0).toFixed(2);

export const sumProfit = (data) => data
  .reduce(
    (value, { changesPercentage }) => value + (Number(changesPercentage) || 0),
    0,
  )
  .toFixed(2);

export const sumChanges = (data) => data
  .reduce((value, { change }) => value + (Number(change) || 0), 0)
  .toFixed(2);

export const getNumberSuffix = (num) => {
  const number = Math.abs(num);
  if (number > 999 && number < 1000000) {
    return 'k';
  }
  if (number >= 1000000 && number <= 999000000) {
    return 'm';
  }
  if (number >= 1000000000 && number <= 999000000000) {
    return 'b';
  }
  if (number >= 1000000000000) {
    return 't';
  }
  return '';
};

export const formatDataForChart = (data) => {
  const reformat = data.map(
    ({
      date, revenue, costAndExpenses, grossProfit,
    }) => {
      const year = date.split('-');
      return {
        year: year[0],
        revenue: revenue / (10 ** 9),
        costAndExpenses: costAndExpenses / (10 ** 9),
        grossProfit: grossProfit / (10 ** 9),
      };
    },
  );
  return reformat.reverse();
};

export const formatDataForTable = (data) => {
  const reformat = data.map((value) => (value));
  return reformat.reverse();
};
