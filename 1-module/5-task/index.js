/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let lengthStr = str.length

  if (maxlength < lengthStr) {
    return str.substring(0, maxlength-1) + '…'
  }
  return str;
}
