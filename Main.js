
function Searchdate(){
  Tododisplay();
}

//Model
let todos =[];
let checktodos= [];

let storedtodo = JSON.parse(localStorage.getItem("todos"));

if(Array.isArray(storedtodo)){
  todos = storedtodo;
}

//Create todo
function Createtodo(inputtext){
  const todoid = new Date().getTime();
  let tododate = document.getElementById("selectDate").value;
  
  if(inputtext !== ""){
    todos.push({text: inputtext, date: tododate, id: todoid});
  }
  
  Tododisplay(todos);
  Savedtodo();
}

//Delete todo
function Deletetodo(tododelete){
  todos = todos.filter((todos) => {
    if(tododelete === String(todos.id))
    return false;

    else
    return true;
  });
  Tododisplay()
  Savedtodo();
}

//todo local storage
function Savedtodo(){

  localStorage.setItem("todos", JSON.stringify(todos));
}

//Controller
function Addtodo(){
  const inputtext = document.getElementById("inputText").value;
  Createtodo(inputtext);
}

function Deletebutton(event){
  const deletetodo = event.target;
  let tododelete = deletetodo.id;

  Deletetodo(tododelete);
}


//View
function Tododisplay(){
  document.getElementById("root").innerHTML = "";
  let tododate = document.getElementById("selectDate").value;

  let filteredtodo = todos.filter((todos) =>{
    if(tododate === todos.date){
      return true;
    }
    else{
      return false;
    }
  });

  filteredtodo.forEach((todos) => {
    const element = document.createElement('div');
    element.innerHTML = todos.text 

    if(todos.text !== ""){
      document.getElementById("root").appendChild(element);
      const deletebutton = document.createElement("button");
      deletebutton.innerText = "Delete";
      element.appendChild(deletebutton);
      deletebutton.id = todos.id;
      deletebutton.onclick = Deletebutton;
    }
  });
};
Tododisplay();







  
  