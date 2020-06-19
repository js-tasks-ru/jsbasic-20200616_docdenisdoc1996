/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  // ваш код...
  let result = 0;
  for (let key in salaries) {
    let value = salaries[key]
    if (typeof value === 'number') {
      result = result + value;
    }
  }
  return result;
}
