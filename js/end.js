let score = sessionStorage.getItem('score');
let name = sessionStorage.getItem('name');

document.getElementById('name').innerHTML = name;
document.getElementById('text').innerHTML += score + '/10';
