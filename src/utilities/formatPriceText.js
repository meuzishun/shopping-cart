export const formatPriceText = (num) => {
  if (num % 1 === 0) {
    return `$${num}.00`;
  }
  if (num % 0.1 === 0) {
    return `$${num}0`;
  }
  return `$${num}`;
};
