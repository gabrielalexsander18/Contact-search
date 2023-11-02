const button = document.querySelector("button")
const input = document.querySelector("input")
const pOne = document.querySelector("#encontrado")

const pName = document.querySelector("#name")
const pNumber = document.querySelector("#number")
const containerP = document.querySelector(".container_rigth")


const contacts = [
    { name: 'Gabriel', contact: '(31) 97400-6306' },
    { name: 'Carlos', contact: '(31) 97400-6306' },
    { name: 'Maria', contact: '(31) 97400-6306' },
    { name: 'João', contact: '(31) 97400-6306' },
    { name: 'Luzia', contact: '(31) 97400-6306' },
    { name: 'Bernardo', contact: '(31) 97400-6306' },
    { name: 'Baptista', contact: '(31) 97400-6306' },
    { name: 'Fernando', contact: '(31) 97400-6306' },
    { name: 'Sorocaba', contact: '(31) 97400-6306' },
    { name: 'Marcio', contact: '(31) 97400-6306' },
    { name: 'EduKof', contact: '(31) 97400-6306' },
    { name: 'Mateus', contact: '(31) 97400-6306' },
    { name: 'Marcos', contact: '(31) 97400-6306' },
    { name: 'Lucas', contact: '(31) 97400-6306' },
    { name: 'Ariany', contact: '(31) 97400-6306' },
    { name: 'Francisco', contact: '(31) 97400-6306' },
    { name: 'Guilherme', contact: '(31) 97400-6306' },
    { name: 'Casio', contact: '(31) 97400-6306' },
    { name: 'Omar', contact: '(31) 97400-6306' },
    { name: 'Leonardo', contact: '(31) 97400-6306' },
    { name: 'Pedro', contact: '(31) 97400-6306' },
    { name: 'Pelé', contact: '(31) 97400-6306' },
    { name: 'Miguel', contact: '(31) 97400-6306' },
    { name: 'Enny', contact: '(31) 97400-6306' },
]

const showContacts = () => {
    
    for (const contact of contacts) {
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            containerP.style.backgroundColor = `rgba(255, 255, 255, .5)`;
            pOne.style.color = `rgba(127,255,0, .9)`;

            pOne.innerHTML = `Contato encontrado`
            pName.innerHTML = `Nome: ${contact.name}`
            pNumber.innerHTML = `Contato: ${contact.contact}`

            break
        } else {
            containerP.style.backgroundColor = `rgba(255, 255, 255, .5)`;
            pOne.style.color = `rgba(250, 0, 0, .9)`;

            pOne.innerHTML = `Contato não encontrado🫨`
            pName.innerHTML = ``
            pNumber.innerHTML = ``
        }
    }
}

button.addEventListener('click', showContacts)