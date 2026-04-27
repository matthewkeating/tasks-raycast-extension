import { Action, ActionPanel, Color, Icon, List, showToast, Toast } from "@raycast/api";
import { useCallback, useEffect, useState } from "react";
import { readTasks, Task, writeTasks } from "./utils";

export default function ListTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(() => {
    const all = readTasks();
    setTasks(all.filter((t) => !t.completed && !t.deleted));
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  function updateTask(id: string, patch: Partial<Task>) {
    const all = readTasks();
    const target = all.find((t) => t.id === id);
    if (!target) return;
    writeTasks([{ ...target, ...patch }, ...all.filter((t) => t.id !== id)]);
    loadTasks();
  }

  function completeTask(task: Task) {
    updateTask(task.id, { completed: true });
    showToast({ style: Toast.Style.Success, title: "Task completed" });
  }

  function deleteTask(task: Task) {
    updateTask(task.id, { deleted: true });
    showToast({ style: Toast.Style.Success, title: "Task deleted" });
  }

  function toggleFlag(task: Task) {
    updateTask(task.id, { flagged: !task.flagged });
    showToast({ style: Toast.Style.Success, title: task.flagged ? "Flag removed" : "Task flagged" });
  }

  return (
    <List>
      {tasks.length === 0 && <List.EmptyView title="No tasks" description="Add a task to get started." />}
      {tasks.map((task) => (
        <List.Item
          key={task.id}
          title={task.title}
          icon={task.flagged ? { source: Icon.Flag, tintColor: Color.Yellow } : Icon.Circle}
          actions={
            <ActionPanel>
              <Action title="Complete" icon={Icon.Checkmark} onAction={() => completeTask(task)} />
              <Action
                title={task.flagged ? "Remove Flag" : "Flag"}
                icon={Icon.Flag}
                onAction={() => toggleFlag(task)}
              />
              <Action
                title="Delete"
                icon={Icon.Trash}
                style={Action.Style.Destructive}
                onAction={() => deleteTask(task)}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
