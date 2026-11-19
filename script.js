const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span><button class="delete-btn">X</button>`;

  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  input.value = "";
});
