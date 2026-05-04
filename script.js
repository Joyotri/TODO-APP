const input = document.querySelector("input");
const addBtn = document.querySelector("#btn");
const output = document.querySelector(".output");
const todo = [];

function check(inputVal, todoList) {
  if (inputVal === "") return false;

  for (let i = 0; i < todoList.length; ++i) {
    if (todoList[i] === inputVal) {
      alert("Todo already exists");
      return false;
    }
  }
  return true;
}

function display() {
  output.innerHTML = "";

  for (let i = 0; i < todo.length; ++i) {
    output.innerHTML += `
        <div>${todo[i]} <button onclick="delTodo(${i})">Del</button></div>
        `
        }
}

function delTodo(i){
    console.log(i)
    todo.splice(i,1)
    console.log(todo)
    display()
}

function add() {
  const inputVal = input.value.trim();

  if (
    check(
      inputVal,
      todo.map((t) => t.text),
    )
  ) {
    todo.push({ text: inputVal, done: false });
    display();
  }

  input.value = "";
}

function doneTask(index) {
  todo[index].done = !todo[index].done;
  display();
}

function deleteTask(index) {
  todo.splice(index, 1);
  display();
}

addBtn.addEventListener("click", add);
input.addEventListener('keydown', (e)=>{
   if(e.key === 'Enter') add()
})