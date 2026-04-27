import { Action, ActionPanel, Icon, List, showToast, Toast } from "@raycast/api";
import { useCallback, useEffect, useState } from "react";
import { readTasks, Task, writeTasks } from "./utils";

export default function CompleteTask() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(() => {
    setTasks(readTasks().filter((t) => !t.completed && !t.deleted));
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  function completeTask(task: Task) {
    const all = readTasks();
    writeTasks(all.map((t) => (t.id === task.id ? { ...t, completed: true } : t)));
    showToast({ style: Toast.Style.Success, title: "Task completed" });
    loadTasks();
  }

  return (
    <List searchBarPlaceholder="Search tasks to complete…">
      {tasks.length === 0 && <List.EmptyView title="No tasks" description="Add a task to get started." />}
      {tasks.map((task) => (
        <List.Item
          key={task.id}
          title={task.title}
          icon={task.flagged ? { source: Icon.Flag, tintColor: "#6264ff" } : Icon.Circle}
          actions={
            <ActionPanel>
              <Action title="Complete" icon={Icon.Checkmark} onAction={() => completeTask(task)} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
