let display = document.querySelector('.display');

console.log('Hi')
document.addEventListener('keydown', function (e) {
    display.innerHTML = e.keyCode + '<br>' + e.key;
})