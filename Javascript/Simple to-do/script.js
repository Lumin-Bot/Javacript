// 1. Select all elements
// 2. When I submit a form add a new element

const list = document.querySelector("#list")
const form = document.querySelector("#new-item-form")
const input = document.querySelector("#item-input")

form.addEventListener("submit", event =>{
    event.preventDefault()
    // 1. Create a new element
    // 2. Add that item to the list
    // 3. Clear input
    // 4. Setup event listener to delete item when clicked    
    const item = document.createElement("div")
    item.innerText = input.value
    item.classList.add("list-item")

    list.appendChild(item)
    input.value = ""

    item.addEventListener("click", () =>{
        item.remove()
    })


})