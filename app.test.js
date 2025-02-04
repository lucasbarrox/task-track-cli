const { addTask, loadTasks} = require('./app');

jest.mock('fs');
jest.mock('path');

describe('addTask', () => {
    it('should add a new task with a valid description', () => {
        const description = 'Test Task';
        const dueDate = '2025-02-10';

        addTask(description, dueDate);

        const tasks = loadTasks();
        expect(tasks).toHaveLength(1);
        expect(tasks[0].description).toBe(description);
        expect(tasks[0].dueDate).toBe(new Date(dueDate).toISOString());
    });

    it('should not add a task with empty description', () => {
        const description = '';
        const dueDate = '2025-02-10';

        addTask(description, dueDate);

        const tasks = loadTasks();
        expect(tasks).toHaveLength(0);
    });

    it('should not add a task with a invalid due date', () => {
        const description = 'Test Task';
        const dueDate = 'invalid-date';

        addTask(description, dueDate);

        const tasks = loadTasks();
        expect(tasks).toHaveLength(0);
    });
});