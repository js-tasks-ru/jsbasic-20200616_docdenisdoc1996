/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbers = str.split(/[\s,]+/)
    .filter(item => isFinite(item))
    .map(item => Number(item))
    .sort(compareNumeric);

  let result = {
    min: numbers[0],
    max: numbers[numbers.length - 1]
  }

  return result;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
