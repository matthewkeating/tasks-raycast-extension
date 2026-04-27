import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { homedir } from "os";
import { dirname, join } from "path";

export interface Task {
  id: string;
  title: string;
  flagged: boolean;
  completed: boolean;
  deleted: boolean;
  notes: string | null;
}

export const TASKS_FILE_PATH = join(homedir(), "Library", "Application Support", "Tasks", "tasks.json");

export function readTasks(): Task[] {
  if (!existsSync(TASKS_FILE_PATH)) {
    return [];
  }
  const raw = readFileSync(TASKS_FILE_PATH, "utf-8");
  return JSON.parse(raw) as Task[];
}

export function writeTasks(tasks: Task[]): void {
  const dir = dirname(TASKS_FILE_PATH);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks, null, 2), "utf-8");
}
