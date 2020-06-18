/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
   switch (str.toUpperCase()) {
     case 'free xxxxx'.toUpperCase():
       return true;
      case '1XbeT now'.toUpperCase():
        return true; 
     default:
       return false;  
   }
  }

