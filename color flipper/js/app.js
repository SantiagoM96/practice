const colors = ["blue", "red", "rgba(133,122,200)", "#f15025"]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', () => {
    /* get random number between 0 - 3 
    posiciones del array*/
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber]
})


const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

