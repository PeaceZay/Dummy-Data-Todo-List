// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
// let todoByUserArray = [];


const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)

}

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {
        let toDoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(arrayOfTodos[i].title)
        element.appendChild(text)
        toDoList.appendChild(element)
    }
}

const filterTodoByUser = () => {
    let userSelected = document.getElementById("userSelected").value
    let todoByUserArray = arrayOfTodos.filter(todo => todo.userId == userSelected);
    clearScreen()
    for (let i = 0; i < todoByUserArray.length; i++) {
        let toDoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(todoByUserArray[i].title)
        element.appendChild(text)
        toDoList.appendChild(element)
    }
}

const clearScreen = () => {
    const allListElements = document.querySelectorAll("li")
    console.log(allListElements)
    for (let index = 0; index < allListElements.length; index++) {
        allListElements[index].remove();

    }
}

const filterTodoByCompleted = () => {
    let userSelected = document.getElementById("userSelected").value
    let todoByUserArray = arrayOfTodos.filter(todo => todo.userId == userSelected);
    let filterComplete = todoByUserArray.filter(task => task.completed == true)
    clearScreen()
    console.log(filterComplete)
    for (let i = 0; i < filterComplete.length; i++) {
        let toDoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(filterComplete[i].title)
        element.appendChild(text)
        toDoList.appendChild(element)
    }
}

const filterTodoByIncompleted = () => {
    let userSelected = document.getElementById("userSelected").value
    let todoByUserArray = arrayOfTodos.filter(todo => todo.userId == userSelected);
    let filterIncomplete = todoByUserArray.filter(objective => objective.completed == false)
    clearScreen()
    console.log(filterIncomplete)
    for (let i = 0; i < filterIncomplete.length; i++) {
        let toDoList = document.getElementById("todo-list")
        let element = document.createElement("li")
        let text = document.createTextNode(filterIncomplete[i].title)
        element.appendChild(text)
        toDoList.appendChild(element)
    }
}


// 


    // const arrayOfTodos = words.filter((word) => word.length > 6);
    // const arrayOfTodos = () => {
      
        // while (counter <= 100) {
          
        // }
    //   }
