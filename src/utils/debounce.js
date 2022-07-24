/**
 * @param {Function} func
 * @param {number} waitMs
 */
export default function debounce(func, waitMs) {
  let inDebounce;
  return (...args) => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), waitMs);
  };
}
