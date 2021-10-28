const addUserButton = document.getElementById('add-user')
const doubleMoneyButton = document.getElementById('double-money')
const showMillionairesButton = document.getElementById('show-millionaires')
const sortButton = document.getElementById('sort')
const entireWealthButton = document.getElementById('entire-wealth')
const items = document.getElementById('items')

const peopleList = []
class RichPeople{
    constructor(person, wealth) {
        this.person = person
        this.wealth = wealth
    }
    doubleMoney(){
        this.wealth *= 2
    }
}


function addUser(name, money){
    peopleList.push(
        new RichPeople(name,money)
    )
    updateDOM()
}

function doubleMoney(){
    for (const user of peopleList) {
        user.doubleMoney()
    }
    updateDOM()
}

function showOnlyMillionaires(){
    const listLength = peopleList.length
    let arrPos = 0
    for(let count = 0;count < listLength; count++){
        if(peopleList[arrPos].wealth < 100){
            peopleList.splice(arrPos,1)
            arrPos--
        }
        arrPos++
    }
    updateDOM()
}

function updateDOM(){
    items.innerHTML = ``
    for (const user of peopleList) {
        const element = document.createElement('div')
        element.classList.add('item')
        element.innerHTML = `<div class="person">${user.person}</div><div class="wealth">${user.wealth}</div>`
        items.appendChild(element)
    }
}

addUserButton.addEventListener('click',()=>{addUser('Amy',50)})
doubleMoneyButton.addEventListener('click',doubleMoney)
showMillionairesButton.addEventListener('click',showOnlyMillionaires)
addUser('a', 122)
addUser('b', 122)
addUser('c', 245)
addUser('d', 34)
addUser('e', 89)
addUser('f', 122)
addUser('g', 245)
addUser('h', 34)
addUser('i', 89)