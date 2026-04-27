import { Action, ActionPanel, Icon, List, showToast, Toast } from "@raycast/api";
import { useCallback, useEffect, useState } from "react";
import { readTasks, Task, writeTasks } from "./utils";

export default function FlagTask() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(() => {
    setTasks(readTasks().filter((t) => !t.completed && !t.deleted));
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  function toggleFlag(task: Task) {
    const all = readTasks();
    writeTasks(all.map((t) => (t.id === task.id ? { ...t, flagged: !t.flagged } : t)));
    showToast({ style: Toast.Style.Success, title: task.flagged ? "Flag removed" : "Task flagged" });
    loadTasks();
  }

  return (
    <List searchBarPlaceholder="Search tasks to flag…">
      {tasks.length === 0 && <List.EmptyView title="No tasks" description="Add a task to get started." />}
      {tasks.map((task) => (
        <List.Item
          key={task.id}
          title={task.title}
          icon={task.flagged ? { source: Icon.Flag, tintColor: "#6264ff" } : Icon.Circle}
          actions={
            <ActionPanel>
              <Action
                title={task.flagged ? "Remove Flag" : "Flag"}
                icon={Icon.Flag}
                onAction={() => toggleFlag(task)}
              />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
