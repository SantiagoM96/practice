const init = () => {
    fetchData();
}


const imgD = document.getElementById('person-img')
const authorD = document.getElementById('author')
const jobD = document.getElementById('job')
const infoD = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item

let currentItem = 0;
let people;

const fetchData = async () => {
    try {
        const res = await fetch('data/productos.json');
        const data = await res.json();
        people = data; //array de objetos trabajadores
        showPerson(people) //funcion que pinta a la persona y lleva como parámetro al array de personas
    } catch (error) {
        console.log(error);
    }
};

const showPerson = people => {


    let { name, job, img, text } = people[currentItem]

    imgD.src = img;
    authorD.textContent = name;
    jobD.textContent = job;
    infoD.textContent = text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;

    if (currentItem > people.length - 1) {
        /* people.length es 4 y las posiciones del array llegan hasta 3 porque comienza en cero, por ende se coloca -1 */
        currentItem = 0
    }
    showPerson(people)
})

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length - 1;
    }
    showPerson(people)
})

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * people.length)
    showPerson(people)
})


