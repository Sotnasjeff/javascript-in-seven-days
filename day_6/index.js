const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green', 'Grey', 'Pink']
const btn = document.getElementById('btn')
const colorName = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomicColor = colors[getRandomColor()]
    document.body.style.background = randomicColor
    colorName.textContent = randomicColor
    
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}