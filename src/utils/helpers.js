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
  const number = Math.abs(num);
  if (number > 999 && number < 1000000) {
    return 'k'; // convert to K for number from > 1000 < 1 million
  } if (number >= 1000000 && number <= 999000000) {
    return 'm'; // convert to M for number from > 1 million
  } if (number >= 1000000000 && number <= 999000000000) {
    return 'b'; // convert to B for number from > 1 billion
  } if (number >= 1000000000000) {
    return 't'; // convert to T for number from > 1 trillion
  }
  return ''; // if value < 1000, nothing to do
};
