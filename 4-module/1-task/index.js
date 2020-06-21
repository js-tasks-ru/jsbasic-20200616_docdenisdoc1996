/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  
  friends.forEach(item => {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item.firstName + ' ' + item.lastName));
    ul.appendChild(li);
  })

  return ul;
}
