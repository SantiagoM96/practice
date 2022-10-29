const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
/* Lo que está en el array representa  
los valores de un código hexadecimal. Del 0 al 9 y de A la F */
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', () => {
    /* recorrerá el array 6 veces, es decir por los 6 valores del código y lo 
    agrega a mi variable */
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
        //lo que está entre corchetes cuadrados es la posición
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor
})

  
const getRandomNumber = () => {
   return Math.floor(Math.random() * hex.length)
}

