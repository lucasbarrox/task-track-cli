```markdown
# Task Tracker CLI

Task Tracker CLI is a simple command-line tool to **manage and track tasks** efficiently. It allows you to **add, update, delete**, and **mark tasks as in progress or done**. Tasks are stored in a JSON file, ensuring easy data persistence.

## 🚀 Features

- **Add tasks** with a description.
- **List tasks** (all or filtered by status).
- **Update tasks** to modify their descriptions.
- **Delete tasks** from the list.
- **Mark tasks as "in progress" or "done".**
- **Local JSON storage** for task persistence.

---

## 🛠️ How to Use

### Prerequisites

Ensure you have **[Node.js](https://nodejs.org/)** installed. You can check by running:

```bash
node -v
```

If Node.js is not installed, download and install it from the [official website](https://nodejs.org/).

---

### Running the CLI

To use the Task Tracker CLI, open a terminal and navigate to the project directory:

```bash
cd /path/to/your/project
```

Then run commands using:

```bash
node index.js <command> [arguments]
```

Alternatively, you can add a shortcut in `package.json` for easier execution:

```json
"scripts": {
  "start": "node index.js"
}
```

Now, you can simply run:

```bash
npm start
```

---

## 📌 Commands

### 1️⃣ Add a new task

```bash
node index.js add "Task description"
```

Example:

```bash
node index.js add "Buy groceries"
```

📌 **Output:**
```
Task added successfully (ID: 1)
```

---

### 2️⃣ List all tasks

```bash
node index.js list
```

📌 **Example Output:**
```
Tasks:
[1] Buy groceries - Status: todo
[2] Learn JavaScript - Status: in-progress
```

---

### 3️⃣ List tasks by status

- **Completed tasks:**
  ```bash
  node index.js list done
  ```

- **Pending tasks:**
  ```bash
  node index.js list todo
  ```

- **In-progress tasks:**
  ```bash
  node index.js list in-progress
  ```

---

### 4️⃣ Update a task

Modify the description of an existing task.

```bash
node index.js update <ID> "New task description"
```

Example:

```bash
node index.js update 1 "Buy groceries and cook dinner"
```

📌 **Output:**
```
Task 1 updated successfully.
```

---

### 5️⃣ Mark a task as "in progress"

```bash
node index.js mark-in-progress <ID>
```

Example:

```bash
node index.js mark-in-progress 1
```

📌 **Output:**
```
Task 1 marked as in-progress.
```

---

### 6️⃣ Mark a task as "done"

```bash
node index.js mark-done <ID>
```

Example:

```bash
node index.js mark-done 1
```

📌 **Output:**
```
Task 1 marked as done.
```

---

### 7️⃣ Delete a task

```bash
node index.js delete <ID>
```

Example:

```bash
node index.js delete 1
```

📌 **Output:**
```
Task 1 deleted successfully.
```

---

## 📂 JSON File Structure

The tasks are stored in a `tasks.json` file with the following format:

```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2025-02-01T12:00:00Z",
    "updatedAt": "2025-02-01T12:00:00Z"
  },
  {
    "id": 2,
    "description": "Learn JavaScript",
    "status": "in-progress",
    "createdAt": "2025-02-01T12:05:00Z",
    "updatedAt": "2025-02-01T12:10:00Z"
  }
]
```

Each task contains:

- **id:** Unique identifier.
- **description:** Task details.
- **status:** `todo`, `in-progress`, or `done`.
- **createdAt:** Timestamp when the task was created.
- **updatedAt:** Timestamp when the task was last updated.

---

## 🤝 Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your feature:  
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit your changes**:  
   ```bash
   git commit -am "Add new feature"
   ```
4. **Push the branch** to GitHub:  
   ```bash
   git push origin feature/new-feature
   ```
5. **Submit a pull request**.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🔧 Running the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/task-tracker-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-tracker-cli
   ```

3. Run the CLI:

   ```bash
   node index.js
   ```

---

Feel free to suggest improvements or report issues. Contributions are always welcome! 🚀
```