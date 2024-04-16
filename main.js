// set constant variables

const inputToDo = document.querySelector(".text")
const buttonToDo = document.querySelector(".button-input")
const listToDo = document.querySelector(".todo")

function buttonClick(e) {
    e.preventDefault()
    addToList()
}

// adding to the list

function addToList() {
    const items = document.createElement('div')
    items.classList.add('items')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputToDo.value
    items.appendChild(item)

    if (inputToDo === '') return

    // check button

    const check = document.createElement("button")
    //check.innerHTML = 
    check.classList.add("check")
    items.appendChild(check)

    const trash = document.createElement("button")
    //trash.innerHTML =
    trash.classList.add("trash")
    items.appendChild(trash)


    listToDo.appendChild(items)
    inputToDo.value = ''

}

// toDoList checking & deleting

