---

# Task Tracker CLI

Task Tracker CLI is a simple command-line tool to **manage and track your tasks** efficiently. It lets you add, update, delete, and mark tasks as *in progress* or *done*. All tasks are stored in a local JSON file (located in your home directory), ensuring your data remains persistent.

---

## 🚀 Features

- **Add tasks** with a description.
- **List tasks** in a formatted table.
- **Update tasks** to change descriptions.
- **Mark tasks** as "in progress" or "done".
- **Delete individual tasks.**
- **Clear all tasks** after confirmation.
- **Local JSON storage** in `task-tracker.json` (stored in your home directory).

---

## 🛠️ How to Use

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed. Verify by running:

```bash
node -v
```

If Node.js isn’t installed, download it from the [official website](https://nodejs.org/).

### Running the CLI

1. Open your terminal and navigate to the project directory:

   ```bash
   cd /path/to/your/project
   ```

2. Execute commands using:

   ```bash
   task-cli <command> [arguments]
   ```

   For convenience, you can add a shortcut in your `package.json`:

   ```json
   "scripts": {
     "start": "task-cli"
   }
   ```

   Then run:

   ```bash
   npm start
   ```

---

## 📌 Commands

### 1️⃣ Add a New Task

```bash
task-cli add "Task description"
```

**Example:**

```bash
task-cli add "Buy groceries"
```

**Output:**

```
Task added successfully (ID: 1)
```

---

### 2️⃣ List All Tasks

```bash
task-cli list
```

**Example Output:**

```
ID   | Description                   | Status               | Due Date     | Created At
------------------------------------------------------------------------------------------
1    | Buy groceries                 | 🟡 To Do             | N/A          | 01/02/25 - 12:00
2    | Learn JavaScript              | 🔵 In Progress       | N/A          | 01/02/25 - 12:05
```

---

### 3️⃣ Update a Task

```bash
task-cli update <ID> "New task description"
```

**Example:**

```bash
task-cli update 1 "Buy groceries and cook dinner"
```

**Output:**

```
Task 1 updated successfully.
```

---

### 4️⃣ Mark a Task as "In Progress"

```bash
task-cli mark-in-progress <ID>
```

**Example:**

```bash
task-cli mark-in-progress 1
```

**Output:**

```
Task 1 marked as in-progress.
```

---

### 5️⃣ Mark a Task as "Done"

```bash
task-cli mark-done <ID>
```

**Example:**

```bash
task-cli mark-done 1
```

**Output:**

```
Task 1 marked as done.
```

---

### 6️⃣ Delete a Task

```bash
task-cli delete <ID>
```

**Example:**

```bash
task-cli delete 1
```

**Output:**

```
Task 1 deleted successfully.
```

---

### 7️⃣ Clear All Tasks

This command deletes **all tasks** from your list. For safety, you will be prompted to confirm the action.

```bash
task-cli clear
```

**Prompt:**

```
Are you sure you want to delete all tasks? (yes/no)
```

Type `yes` to confirm or `no` to cancel.

---

## 📂 JSON File Structure

Tasks are stored in a file named `task-tracker.json` in your home directory. The file follows this structure:

```json
[
    {
        "id": 1,
        "description": "Buy groceries",
        "status": "todo",
        "createdAt": "2025-02-01T12:00:00Z",
        "updatedAt": "2025-02-01T12:00:00Z",
        "dueDate": null
    },
    {
        "id": 2,
        "description": "Learn JavaScript",
        "status": "in-progress",
        "createdAt": "2025-02-01T12:05:00Z",
        "updatedAt": "2025-02-01T12:10:00Z",
        "dueDate": null
    }
]
```

Each task contains:

- **id:** Unique identifier.
- **description:** Details of the task.
- **status:** Can be `todo`, `in-progress`, or `done`.
- **createdAt:** Timestamp when the task was created.
- **updatedAt:** Timestamp when the task was last updated.
- **dueDate:** Optional due date (if provided).

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository** on GitHub.
2. **Create a new branch**:

   ```bash
   git checkout -b feature/new-feature
   ```

3. **Commit your changes:**

   ```bash
   git commit -am "Add new feature"
   ```

4. **Push your branch:**

   ```bash
   git push origin feature/new-feature
   ```

5. **Submit a pull request** on GitHub.

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
   task-cli
   ```

---

Feel free to suggest improvements or report issues. Happy tracking! 🚀

---

I got the idea for the app from https://roadmap.sh/projects/task-tracker