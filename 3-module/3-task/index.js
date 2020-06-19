/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map(function(item, index, array) {
    if (index > 0) {
     return item.charAt(0).toUpperCase() + item.slice(1);
    }
    return item;
}).join('')
}
