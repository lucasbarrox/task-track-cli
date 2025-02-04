#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const TASK_FILES = path.join(process.cwd(), "task-tracker.json");

function loadTasks() {
    if (!fs.existsSync(TASK_FILES)) {
        return [];
    }
    try {
        const data = fs.readFileSync(TASK_FILES, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading tasks.json:", error);
        return [];
    }
}

function saveTasks(tasks) {
    fs.writeFileSync(TASK_FILES, JSON.stringify(tasks, null, 4), "utf-8");
}

function addTask(description, dueDate = null) {
    if(!description.trim()){
        console.log("Error: Task description cannot be empty.");
        return;
    }
    if(description.length < 5){
        console.log("Error: Task description needs at least 5 caracteres")
    }

    if(dueDate){
        const currentDate = new Date();
        const inputDate = new Date(dueDate);
        if(isNaN(inputDate.getTime())){
            console.log("Error: Given due data is invalid.");
            return;
        }
        if(inputDate <= currentDate){
            console.log("Error: The due date must be a future date.");
            return;
        }
    }

    const tasks = loadTasks();
    const taskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    const newTask = {
        id: taskId,
        description: description,
        status: "todo",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        dueDate: dueDate ? new Date(dueDate).toISOString() : null,
    };

    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added successfully (ID: ${taskId})`);
}

function getStatusIcon(status) {
    switch(status) {
        case "todo":
            return "🟡 To Do  ";
        case "in-progress":
            return "🔵 In Progress  ";
        case "done":
            return "🟢 Done";
        default:
            return status;
    }
}

function listTasks(filterStatus = null) {
    let tasks = loadTasks();

    if(filterStatus){
        if(filterStatus){
            if(filterStatus === "not-done"){
                tasks = tasks.filter(task => task.status !== "done");
            } else{
                tasks = tasks.filter(task => task.status === filterStatus);
            }
        }
    }

    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    console.log("ID".padEnd(5) + "| " +
        "Description".padEnd(26) + "| " +
        "Status".padEnd(21) + "| " +
        "Due Date".padEnd(14) + "| " +
        "Created At");
    console.log("-".repeat(90));

    tasks.forEach(task => {
        console.log(
            String(task.id).padEnd(4) + " | " +
            task.description.padEnd(25) + " | " +
            getStatusIcon(task.status).padEnd(20) + " | " +
            (task.dueDate ? new Date(task.dueDate).toLocaleDateString("pt-BR") : "N/A").padEnd(13) + " | " +
            new Date(task.createdAt).toLocaleString("pt-BR", {
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            }).replace(",", " -")
        );
    });
    
}

function updateTask(taskId, newDescription) {

    if(isNaN(taskId) || taskId <= 0){
        console.log("Error: Task ID must be a positive integer.");
        return;
    }

    const tasks = loadTasks();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        console.log(`Error: Task with ID ${taskId} not found.`);
        return;
    }

    task.description = newDescription;
    task.updatedAt = new Date().toISOString(); // Fixing the typo here
    saveTasks(tasks);
    console.log(`Task ${taskId} updated successfully.`);
}

function markTaskStatus(taskId, status) {
    const validStatuses = ["in-progress", "done"];
    if (!validStatuses.includes(status)) {
        console.log(`Error: Invalid status '${status}'. Use 'in-progress' or 'done'.`);
        return;
    }

    const tasks = loadTasks();
    const task = tasks.find(task => task.id === taskId);

    if (!task) {
        console.log(`Error: Task with ID ${taskId} not found.`);
        return;
    }

    task.status = status;
    task.updatedAt = new Date().toISOString(); // Fixing the typo here
    saveTasks(tasks);
    console.log(`Task ${taskId} marked as ${status}.`);
}

function deleteTask(taskId){
    const tasks = loadTasks();
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if(taskIndex === -1){
        console.log(`Error: Task with ID ${taskId} not found.`);
        return;
    }

    tasks.splice(taskIndex, 1);
    saveTasks(tasks);
    console.log(`Task ${taskId} deleted sucessfully.`);
}

function printUsage() {
    console.log("\nUsage:");
    console.log('  node app.js add "Task description"             -> Add a new task');
    console.log("  node app.js list                               -> List all tasks");
    console.log("  node app.js list done                          -> List tasks with status 'done'");
    console.log("  node app.js update <ID> \"New description\"      -> Update a task");
    console.log("  node app.js mark-in-progress <ID>              -> Mark a task as in progress");
    console.log("  node app.js mark-done <ID>                     -> Mark a task as done");
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log("Error: No command provided.");
        printUsage();
        return;
    }

    const command = args[0];

    switch (command) {
        case "add":
            if (args.length < 2) {
                console.log("Error: No task description provided.");
                return;
            }
            const description = args.slice(1).join(" ");
            addTask(description);
            break;
        case "list":
            if (args.length === 2) {
                listTasks(args[1]);
            } else {
                listTasks();
            }
            break;
        case "update":
            if (args.length < 3) {
                console.log("Error: Missing task ID or new description.");
                return;
            }
            const taskId = parseInt(args[1]);
            if (isNaN(taskId)) {
                console.log("Error: Task ID must be a number.");
                return;
            }
            updateTask(taskId, args.slice(2).join(" "));
            break;
        case "mark-in-progress":
        case "mark-done":
            if (args.length < 2) {
                console.log("Error: Missing task ID.");
                return;
            }
            const statusTaskId = parseInt(args[1]);
            if (isNaN(statusTaskId)) {
                console.log("Error: Task ID must be a number.");
                return;
            }
            markTaskStatus(statusTaskId, command === "mark-in-progress" ? "in-progress" : "done");
            break;
        case "delete":
            if(args.length < 2){
                console.log("Error: Missing task ID.");
                return;
            }
            const deleteTaskId = parseInt(args[1]);
            if(isNaN(deleteTaskId)){
                console.log("Error: Task ID must be a number.")
                return;
            }
            deleteTask(deleteTaskId);
            break;
        case "clear":
            console.log("Are you sure you want to delete all tasks? (yes/no)");
            process.stdin.once("data", (input) => {
                if(input.toString().trim().toLocaleLowerCase() === "yes"){
                    saveTasks([]);
                    console.log("All tasks have been deleted.");
                } else{
                    console.log("Operation canceled.");
                }
                process.exit();
            });
            break;
        default:
            console.log(`Error: Unknown command '${command}'`);
            printUsage();
    }
}

if (require.main === module) {
    main();
}

module.exports = { loadTasks, addTask };
