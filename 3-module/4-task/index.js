/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let usersFinal = users.filter(user => user.age <= age)
  let size = usersFinal.length - 1;
  let result = '';

  usersFinal.map(function(user, index, arr){
    if (index != size) {
      result = result + user.name + ', ' + user.balance + '\n'
    } else {
      result = result + user.name + ', ' + user.balance
    }
  })
  return result;
  }
