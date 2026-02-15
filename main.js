const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const list = document.getElementById("list");

addBtn.addEventListener("click", function () {
  const task = input.value.trim();
  if (task === "") return;
  const li = document.createElement("li");
  const left = document.createElement("div");
  left.style.display = "flex";
  left.style.gap = "10px";
  li.appendChild(left);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  left.appendChild(checkbox);
  const span = document.createElement("span");
  span.textContent = task;
  left.appendChild(span);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.border = "none";
  deleteBtn.style.background = "transparent";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    list.removeChild(li);
  });
  list.appendChild(li);
  input.value = "";
});
removeBtn.addEventListener("click", function () {
  const items = list.querySelectorAll("li");
  items.forEach((item) => {
    const checkbox = item.querySelector("input[type='checkbox']");
    if (checkbox.checked) {
      list.removeChild(item);
    }
  });
});
