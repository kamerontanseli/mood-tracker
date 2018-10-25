export const sum = arr => arr.reduce((a, b) => a + b, 0);
export const getKey = key => arr => arr.map(item => item[key]);
export const average = arr => sum(arr) / arr.length;
export const isNaNDefault = (n, fallback) => (isNaN(n) ? fallback : n);
export const insightAverage = arr => isNaNDefault(average(getKey("mood")(arr)), 0);