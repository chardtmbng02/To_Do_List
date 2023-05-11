// Get the necessary DOM elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");


// ### Fetch todos from the API and add them to the todo list ###
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    todos.forEach((todo) => {
      createTodoItem(todo.title, todo.completed);
      console.log(todo.id , todo.title, todo.completed);

    });
  });


// Function to create a new todo item
function createTodoItem(title, completed) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.textContent = title;

  if (completed) {
    todoItem.classList.add("done");
  }

  todoList.appendChild(todoItem);


   // Single click will set the list to completed = True and add class style "done"
   todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("done");
  });
  
  // double click will remove the todo list item.
  todoItem.addEventListener("dblclick", () => {
    todoList.removeChild(todoItem);
  });

 
}

// Add event listener for form submission to create a new todo item
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value.trim();
  if (title) {
    createTodoItem(title);
    document.querySelector("#title").value = "";
  }
  else    
    {
    alert("Please input a to do list.");
  }
});




