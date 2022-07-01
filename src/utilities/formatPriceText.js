export const formatPriceText = (num) => {
  if (num % 1 === 0) {
    return `$${num}.00`;
  }
  if ((num * 10) % 1 === 0) {
    return `$${num}0`;
  }
  if ((num * 100) % 1 === 0) {
    return `$${Math.round(num * 100) / 100}`;
  }
  return `$${num}`;
};
