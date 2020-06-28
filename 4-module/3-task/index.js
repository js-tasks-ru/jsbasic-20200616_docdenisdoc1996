/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    for (let r = 0; r < table.rows.length; r++) {
        let tr = table.rows[r]
        let td = table.rows[r].cells[3]
        let gender = table.rows[r].cells[2].innerText
        let age = table.rows[r].cells[1].innerText
    
        if (td.hasAttribute('data-available')) {

            if (td.getAttribute('data-available') === 'true') {
                tr.classList.add('available')
            }
              
            if (td.getAttribute('data-available') === 'false') {
                tr.classList.add('unavailable')
            }
          } else{
              tr.setAttribute('hidden', true)
          }
 
          if (gender === 'm') {
              tr.className += ' male'
          } 

          if (gender === 'f') {
            tr.className += ' female'
          }
        
          if (age < 18) {
            tr.style = 'text-decoration: line-through'
        }
    }
    }


