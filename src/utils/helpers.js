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
