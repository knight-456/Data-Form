"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { cn } from "@/lib/utils";

const initialTasks = [
  { id: 1, text: "Review PR #45", completed: false },
  { id: 2, text: "Update documentation for API", completed: true },
  { id: 3, text: "Email Q3 report to board", completed: false },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
    toast.success("Task added");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
    toast.error("Task deleted");
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">My Tasks</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Active Tasks */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>To Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={addTask} className="flex gap-2">
              <Input
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <Button size="icon" type="submit">
                <Plus className="h-4 w-4" />
              </Button>
            </form>
            <div className="space-y-2">
              {tasks
                .filter((t) => !t.completed)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between group p-2 hover:bg-muted rounded-md transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                      />
                      <span>{task.text}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 text-red-500"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              {tasks.filter((t) => !t.completed).length === 0 && (
                <div className="text-center text-sm text-muted-foreground py-4">
                  No pending tasks.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Completed Tasks */}
        <Card className="h-fit opacity-80">
          <CardHeader>
            <CardTitle>Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {tasks
                .filter((t) => t.completed)
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-2 rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                      />
                      <span className="line-through text-muted-foreground">
                        {task.text}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
