"use client";

import * as React from "react";
import { cn, formatRelativeTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { mockTaskCategories, mockTasks } from "@/data/mock-data";
import { EmotionalState, Task, TaskCategory, TaskPriority } from "@/types";

interface TaskPageProps {
  emotionalState?: EmotionalState;
  onNavigate?: (path: string) => void;
  className?: string;
}

export function TaskPage({
  emotionalState = "stable",
  onNavigate,
  className,
}: TaskPageProps) {
  const [completedTasks, setCompletedTasks] = React.useState<Set<string>>(
    new Set(mockTasks.filter((t) => t.status === "completed").map((t) => t.id)),
  );
  const [expandedCategories, setExpandedCategories] = React.useState<
    Set<string>
  >(
    new Set(["immediate_actions"]), // Start with urgent category expanded
  );
  const [filter, setFilter] = React.useState<"all" | "urgent" | "completed">(
    "all",
  );

  const handleTaskToggle = (taskId: string) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });

    // In a real app, this would sync with the backend
    console.log(
      `Task ${taskId} ${completedTasks.has(taskId) ? "uncompleted" : "completed"}`,
    );
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getPriorityColor = (priority: TaskPriority) => {
    switch (priority) {
      case "urgent":
        return "text-supportive-error";
      case "high":
        return "text-careful-warning";
      case "normal":
        return "text-primary";
      case "low":
        return "text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: TaskPriority) => {
    switch (priority) {
      case "urgent":
        return "🚨";
      case "high":
        return "⚠️";
      case "normal":
        return "📋";
      case "low":
        return "💭";
    }
  };

  const getDifficultyBadge = (difficulty: "easy" | "medium" | "complex") => {
    const colors = {
      easy: "bg-gentle-success/10 text-gentle-success border-gentle-success/20",
      medium:
        "bg-information-blue/10 text-information-blue border-information-blue/20",
      complex:
        "bg-careful-warning/10 text-careful-warning border-careful-warning/20",
    };

    return (
      <span
        className={cn(
          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border",
          colors[difficulty],
        )}
      >
        {difficulty}
      </span>
    );
  };

  const getFilteredTasks = (tasks: Task[]) => {
    switch (filter) {
      case "urgent":
        return tasks.filter(
          (task) => task.priority === "urgent" && !completedTasks.has(task.id),
        );
      case "completed":
        return tasks.filter((task) => completedTasks.has(task.id));
      default:
        return tasks;
    }
  };

  const TaskItem: React.FC<{ task: Task; category: TaskCategory }> = ({
    task,
  }) => {
    const isCompleted = completedTasks.has(task.id);

    return (
      <Card
        className={cn(
          "transition-all duration-200",
          isCompleted &&
            "opacity-60 bg-gentle-success/5 border-gentle-success/20",
        )}
      >
        <CardContent className="p-4">
          <div className="flex items-start space-x-4">
            <Checkbox
              checked={isCompleted}
              onCheckedChange={() => handleTaskToggle(task.id)}
              emotionalState={emotionalState}
              className="mt-1"
            />

            <div className="flex-1 min-w-0 space-y-3">
              <div>
                <h3
                  className={cn(
                    "font-medium",
                    isCompleted
                      ? "line-through text-muted-foreground"
                      : "text-foreground",
                  )}
                >
                  {task.title}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    isCompleted
                      ? "text-muted-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {task.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 text-xs">
                  <span>{getPriorityIcon(task.priority)}</span>
                  <span className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </span>
                </div>

                {getDifficultyBadge(task.difficulty)}

                {task.dueDate && (
                  <span className="text-xs text-muted-foreground">
                    Due: {formatRelativeTime(task.dueDate)}
                  </span>
                )}

                {task.estimatedTime && (
                  <span className="text-xs text-muted-foreground">
                    ~{task.estimatedTime}min
                  </span>
                )}

                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {task.province}
                </span>
              </div>

              {task.steps.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">
                    Steps:
                  </h4>
                  <ul className="space-y-1">
                    {task.steps.map((step, index) => (
                      <li
                        key={step.id}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span
                          className={cn(
                            "size-1.5 rounded-full mt-2 shrink-0",
                            step.completed
                              ? "bg-gentle-success"
                              : "bg-muted-foreground",
                          )}
                        />
                        <span
                          className={
                            step.completed
                              ? "text-muted-foreground line-through"
                              : "text-muted-foreground"
                          }
                        >
                          {index + 1}. {step.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    console.log(`View details for task ${task.id}`)
                  }
                >
                  View Details
                </Button>

                {task.difficulty === "complex" && (
                  <Button
                    variant="gentle"
                    size="sm"
                    onClick={() => onNavigate?.("/help")}
                  >
                    Get Help
                  </Button>
                )}

                {task.resources.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      console.log(`View resources for task ${task.id}`)
                    }
                  >
                    📄 Resources
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate?.("/dashboard")}
              >
                ← Back to Dashboard
              </Button>
              <div className="flex items-center space-x-2">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    AM
                  </span>
                </div>
                <span className="font-semibold text-lg text-foreground">
                  Tasks
                </span>
              </div>
            </div>
            <Button
              variant="gentle"
              size="sm"
              onClick={() => onNavigate?.("/help")}
            >
              Get Help
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={cn(
            "space-y-8",
            emotionalState === "crisis" && "space-y-10",
          )}
        >
          {/* Page Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Your Tasks
            </h1>
            <p
              className={cn(
                "text-muted-foreground",
                emotionalState === "crisis"
                  ? "text-information-blue font-medium"
                  : "text-muted-foreground",
              )}
            >
              {emotionalState === "crisis"
                ? "Take these one at a time. You're doing great by staying organized during this difficult period."
                : "Complete these tasks to move forward with the estate settlement process"}
            </p>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All Tasks
                </Button>
                <Button
                  variant={filter === "urgent" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("urgent")}
                >
                  🚨 Urgent
                </Button>
                <Button
                  variant={filter === "completed" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("completed")}
                >
                  ✅ Completed
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Task Categories */}
          <div className="space-y-6">
            {mockTaskCategories.map((category) => {
              const filteredTasks = getFilteredTasks(category.tasks);
              if (filteredTasks.length === 0) return null;

              const isExpanded = expandedCategories.has(category.id);
              const completedInCategory = filteredTasks.filter((task) =>
                completedTasks.has(task.id),
              ).length;

              return (
                <Card key={category.id}>
                  <CardHeader
                    className="cursor-pointer hover:bg-muted/30 transition-colors"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {category.name}
                            <span className="text-sm font-normal text-muted-foreground">
                              ({completedInCategory}/{filteredTasks.length})
                            </span>
                          </CardTitle>
                          <CardDescription>
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        {isExpanded ? "▼" : "▶"}
                      </Button>
                    </div>
                  </CardHeader>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div
                        className={cn(
                          "space-y-4",
                          emotionalState === "crisis" && "space-y-6",
                        )}
                      >
                        {filteredTasks.map((task) => (
                          <TaskItem
                            key={task.id}
                            task={task}
                            category={category}
                          />
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Encouragement for crisis users */}
          {emotionalState === "crisis" && (
            <Card className="border-information-blue/30 bg-information-blue/5">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="text-3xl">💙</div>
                  <h3 className="font-medium text-foreground">
                    You're making real progress
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Each task you complete is a step forward. It's okay to take
                    breaks, ask for help, or tackle just one thing at a time.
                    You're handling this incredibly difficult situation with
                    real strength.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate?.("/support")}
                    className="mt-4"
                  >
                    Find Support Resources
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
