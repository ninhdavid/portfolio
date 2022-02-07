const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const toDos_key = "toDos";

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos=toDos.filter(toDo => toDo.id!==parseInt(li.id));

}

function paintToDo(newToDo){
    const li= document.createElement("li");
    li.id = newToDo.id;
    const span= document.createElement("span");
    const button= document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    button.innerText= "X";
    button.addEventListener("click", deleteToDo);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);




const savedToDos = localStorage.getItem(toDos_key);
    
if(savedToDos !==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 
