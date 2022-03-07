export const sortObj = (data) => data.sort((value, { price }) => price - value);

export const sumPrices = (data) => data
  .reduce((value, { price }) => value + (price || 0), 0).toFixed(2);

export const sumProfit = (data) => data
  .reduce(
    (value, { changesPercentage }) => value + (Number(changesPercentage) || 0),
    0,
  )
  .toFixed(2);

export const sumChanges = (data) => data
  .reduce((value, { change }) => value + (Number(change) || 0), 0).toFixed(2);

export const getNumberSuffix = (num) => {
  if (num > 999 && num < 1000000) {
    return 'K'; // convert to K for number from > 1000 < 1 million
  } if (num >= 1000000 && num <= 999000000) {
    return 'M'; // convert to M for number from > 1 million
  } if (num >= 1000000000 && num <= 999000000000) {
    return 'B'; // convert to B for number from > 1 billion
  } if (num >= 1000000000000) {
    return 'T'; // convert to T for number from > 1 trillion
  }
  return ''; // if value < 1000, nothing to do
};
