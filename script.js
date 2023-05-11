// Get the necessary DOM elements
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

// Function to create a new todo item
function createTodoItem(title) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.textContent = title;
  todoList.appendChild(todoItem);

  // Add event listener for double click to delete the todo item
  todoItem.addEventListener("dblclick", () => {
    todoList.removeChild(todoItem);
  });

  // Add event listener for click to change color of the todo item
  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("done");
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