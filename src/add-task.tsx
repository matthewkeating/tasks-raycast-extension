import { Action, ActionPanel, Form, popToRoot, showToast, Toast } from "@raycast/api";
import { randomUUID } from "crypto";
import { readTasks, Task, writeTasks } from "./utils";

export default function AddTask() {
  function handleSubmit(values: { title: string }) {
    const title = values.title.trim();
    if (!title) return;

    const newTask: Task = {
      id: randomUUID(),
      title,
      flagged: false,
      completed: false,
      deleted: false,
      notes: null,
    };

    const tasks = readTasks();
    writeTasks([newTask, ...tasks]);

    showToast({ style: Toast.Style.Success, title: "Task added" });
    popToRoot();
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Add Task" onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="title" title="Task" placeholder="Enter task title" autoFocus />
    </Form>
  );
}
