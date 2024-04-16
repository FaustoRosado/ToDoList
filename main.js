// set constant variables

const inputToDo = document.querySelector('.text')
const buttonToDo = document.querySelector('.button-input')
const listToDo = document.querySelector('.todo')

function buttonClick(event) {
    event.preventDefault()
    addToList()
}

// adding to the list

function addToList() {
    const items = document.createElement('div')
    items.classList.add('item-container')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputToDo.value
    items.appendChild(item)

    if (inputToDo === '') return

    // check button

    const check = document.createElement("button")
    check.innerHTML = "check"
    check.classList.add("check")
    items.appendChild(check)


    listToDo.appendChild(items)
    inputToDo.value = ''

}


// toDoList checking & deleting

function checkOrDel(event) {
    // target the item
    const item = event.target

    // checking

    if (item.classList[0] === 'check') {
        const list = item.parentElement
        list.classList.toggle('chk')
        console.log("item checked")
    } 
    
}

buttonToDo.addEventListener('click', buttonClick)
listToDo.addEventListener('click', checkOrDel)

