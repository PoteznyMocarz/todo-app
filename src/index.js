let inputBox = document.getElementById("inputMain");
let listContainer = document.getElementById("listContainer");
let submitBtn = document.getElementById("submitBtn");
let itemsLeft = 5;
let itemsLeftSpan = document.getElementById("itemsLeftSpan");
let clearCompletedBtn = document.getElementById("clearCompletedBtn");
let filterBtn = document.querySelectorAll(".filter-btn");
let modeBtn = document.getElementById("modeBtn")

function addNewTask() {
    if(inputBox.value === "") {
        console.log("error")
    }
    else {
        let li = document.createElement("li")
        li.innerText = inputBox.value
        li.classList.add("li-class")
        li.classList.add("group")
        listContainer.appendChild(li)
        let img = document.createElement("img")
        img.setAttribute("src", "/images/icon-cross.svg")
        img.classList.add("img-class")
        li.appendChild(img)
    }

    inputBox.value = ""
    showItemsLeft()
}

submitBtn.addEventListener("click", addNewTask)
inputBox.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
        addNewTask()
    }
})

function deleteTask(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }

    else if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
    showItemsLeft()
}

listContainer.addEventListener("click", deleteTask)

function clearCompleted() {
    document.querySelectorAll(".checked").forEach(element => element.remove())
}

clearCompletedBtn.addEventListener("click", clearCompleted)

function showActiveTasks() {
    document.querySelectorAll(".li-class").forEach(element => element.classList.remove("hidden"))
    document.querySelectorAll(".checked").forEach(element => element.classList.add("hidden"))
}

document.getElementById("showActiveMob").addEventListener("click", showActiveTasks)
document.getElementById("showActiveDesk").addEventListener("click", showActiveTasks)

function showAllTasks() {
    document.querySelectorAll(".li-class").forEach(element => element.classList.remove("hidden"))
    document.querySelectorAll(".checked").forEach(element => element.classList.remove("hidden"))
}

document.getElementById("showAllMob").addEventListener("click", showAllTasks)
document.getElementById("showAllDesk").addEventListener("click", showAllTasks)

function showCompletedTasks() {
    document.querySelectorAll(".li-class").forEach(element => element.classList.add("hidden"))
    document.querySelectorAll(".checked").forEach(element => element.classList.remove("hidden"))
}

document.getElementById("showCompletedMob").addEventListener("click", showCompletedTasks)
document.getElementById("showCompletedDesk").addEventListener("click", showCompletedTasks)

function showItemsLeft() {
    itemsLeft = document.querySelectorAll("#listContainer .li-class").length - document.querySelectorAll("#listContainer .checked").length
    itemsLeftSpan.innerText = itemsLeft + " items left"
}

showItemsLeft()

filterBtn.forEach((element) => {
    element.addEventListener('click', function() {
        let activeFilter = document.querySelector(".active")
        if(activeFilter) {
            activeFilter.classList.remove("active")
        }
        element.classList.add("active")
    })
})

function toggleMode() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    if(document.body.classList.contains("dark")) {
        setTimeout(() => document.getElementById("mainImgDesk").setAttribute("src", "/images/bg-desktop-dark.jpg"), 50) 
        setTimeout(() => document.getElementById("mainImgMob").setAttribute("src", "/images/bg-mobile-dark.jpg"), 50) 
        setTimeout(() => modeBtn.setAttribute("src", "/images/icon-sun.svg"), 50)
    }

    else {
        setTimeout(() => document.getElementById("mainImgDesk").setAttribute("src", "/images/bg-desktop-light.jpg"), 50) 
        setTimeout(() => document.getElementById("mainImgMob").setAttribute("src", "/images/bg-mobile-light.jpg"), 50) 
        setTimeout(() => modeBtn.setAttribute("src", "/images/icon-moon.svg"), 50)
    }
}

modeBtn.addEventListener("click", toggleMode)