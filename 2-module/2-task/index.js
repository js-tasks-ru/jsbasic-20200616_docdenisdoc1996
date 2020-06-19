/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  // ваш код...
  let isObjEmpth = true;
  for(key in obj){
    isObjEmpth = false;
  break;
 }
 return isObjEmpth;
}
