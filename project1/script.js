const colors = ['green', 'red', 'blue', '#fff', 'pink'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
    //console.log(randomColor)
});

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}