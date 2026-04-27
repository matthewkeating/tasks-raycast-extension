# Tasks — Raycast Extension

A [Raycast](https://raycast.com) extension for [Tasks](https://github.com/matthewkeating/tasks2), a lightweight menu bar task manager.

## Requirements

- [Raycast](https://raycast.com)
- [Tasks](https://github.com/matthewkeating/tasks2)

## Commands

### Add Task
Opens a form to create a new task. The task is added to the top of the task list.

### List Tasks
Displays all active (non-completed, non-deleted) tasks. Select a task and press `⌘ K` to open the action panel with the following options:

| Action | Description |
|--------|-------------|
| Complete | Marks the task as completed |
| Flag / Remove Flag | Toggles the flag on the task, highlighted in yellow |
| Delete | Marks the task as deleted |

## Development

Install dependencies:
```bash
npm install
```

Run in development mode:
```bash
npm run dev
```

This registers the extension with Raycast locally. Any saved changes are picked up automatically.
