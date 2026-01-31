const API_URL = "http://localhost:5000/api/tasks";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const cancelBtn = document.getElementById("cancelBtn");

const taskIdEl = document.getElementById("taskId");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("description");
const statusEl = document.getElementById("status");

const formTitle = document.getElementById("formTitle");

async function fetchTasks() {
  taskList.innerHTML = "<p>Loading tasks...</p>";
  const res = await fetch(API_URL);
  const tasks = await res.json();

  if (!tasks.length) {
    taskList.innerHTML = "<p>No tasks found. Add one above 👆</p>";
    return;
  }

  taskList.innerHTML = tasks
    .map(
      (task) => `
    <div class="task">
      <div>
        <h3>${task.title}</h3>
        <p>${task.description || ""}</p>
        <span class="badge ${task.status}">${task.status}</span>
      </div>

      <div class="actions">
        <button onclick="editTask('${task._id}')">Edit</button>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    </div>
  `,
    )
    .join("");
}

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    title: titleEl.value.trim(),
    description: descEl.value.trim(),
    status: statusEl.value,
  };

  const id = taskIdEl.value;

  if (id) {
    // update
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } else {
    // create
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  resetForm();
  fetchTasks();
});

async function editTask(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const task = await res.json();

  taskIdEl.value = task._id;
  titleEl.value = task.title;
  descEl.value = task.description;
  statusEl.value = task.status;

  formTitle.innerText = "Update Task";
}

async function deleteTask(id) {
  if (!confirm("Delete this task?")) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

function resetForm() {
  taskIdEl.value = "";
  titleEl.value = "";
  descEl.value = "";
  statusEl.value = "pending";
  formTitle.innerText = "Add Task";
}

cancelBtn.addEventListener("click", resetForm);

// initial load
fetchTasks();
