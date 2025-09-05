"use client";
import { cn, formatRelativeTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import {
  mockProgressState,
  mockTaskCategories,
  mockTasks,
  mockUsers,
} from "@/data/mock-data";
import { EmotionalState, TaskPriority } from "@/types";

export interface DashboardPageProps {
  userId?: string;
  emotionalState?: EmotionalState;
  onNavigate?: (path: string) => void;
  className?: string;
}

export function DashboardPage({
  userId = "user-1",
  emotionalState = "crisis",
  onNavigate,
  className,
}: DashboardPageProps) {
  const user = mockUsers.find((u) => u.id === userId) || mockUsers[0];
  const progress = mockProgressState;
  const recentTasks = mockTasks.slice(0, 3);
  const urgentTasks = mockTasks.filter(
    (task) => task.priority === "urgent" && task.status !== "completed",
  );

  const handleContinueIntake = () => {
    console.log("Continue intake clicked");
    onNavigate?.("/intake");
  };

  const handleViewTasks = () => {
    console.log("View tasks clicked");
    onNavigate?.("/tasks");
  };

  const handleGetHelp = () => {
    console.log("Get help clicked");
    onNavigate?.("/help");
  };

  const getPriorityBadge = (priority: TaskPriority) => {
    const colors = {
      urgent:
        "bg-supportive-error/10 text-supportive-error border-supportive-error/20",
      high: "bg-careful-warning/10 text-careful-warning border-careful-warning/20",
      normal: "bg-primary/10 text-primary border-primary/20",
      low: "bg-muted text-muted-foreground border-border",
    };

    return (
      <span
        className={cn(
          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border",
          colors[priority],
        )}
      >
        {priority}
      </span>
    );
  };

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    AM
                  </span>
                </div>
                <span className="font-semibold text-lg text-foreground">
                  AfterMatters
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="gentle" size="sm" onClick={handleGetHelp}>
                Get Help
              </Button>
              <div className="size-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-medium text-sm">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={cn(
            "space-y-8",
            emotionalState === "crisis" ? "space-y-10" : "space-y-8",
          )}
        >
          {/* Welcome Section */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Welcome back, {user.name.split(" ")[0]}
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
                  ? "You're handling this difficult situation with strength. Take things one step at a time."
                  : "Here's what you can work on today"}
              </p>
            </div>
          </div>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>
                {progress.completedTasks} of {progress.totalTasks} key tasks
                completed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressIndicator
                current={progress.completedTasks}
                total={progress.totalTasks}
                label="Overall Progress"
                emotionalState={emotionalState}
                showMessage={true}
                className="mb-6"
              />

              {/* Category Progress */}
              <div className="grid sm:grid-cols-3 gap-4">
                {mockTaskCategories.map((category) => (
                  <div
                    key={category.id}
                    className="text-center p-4 rounded-lg bg-muted/30"
                  >
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h3 className="font-medium text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {category.completedTasks}/{category.totalTasks} complete
                    </p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${category.completionPercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Things you can do right now</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "grid gap-4",
                  emotionalState === "crisis"
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-2 lg:grid-cols-4",
                )}
              >
                <Button
                  onClick={handleContinueIntake}
                  emotionalState={emotionalState}
                  className="h-auto p-4 flex-col space-y-2"
                >
                  <span className="text-lg">📝</span>
                  <span className="text-sm">Continue Setup</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={handleViewTasks}
                  emotionalState={emotionalState}
                  className="h-auto p-4 flex-col space-y-2"
                >
                  <span className="text-lg">✅</span>
                  <span className="text-sm">View All Tasks</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => onNavigate?.("/documents")}
                  emotionalState={emotionalState}
                  className="h-auto p-4 flex-col space-y-2"
                >
                  <span className="text-lg">📄</span>
                  <span className="text-sm">Upload Document</span>
                </Button>

                <Button
                  variant="gentle"
                  onClick={handleGetHelp}
                  emotionalState={emotionalState}
                  className="h-auto p-4 flex-col space-y-2"
                >
                  <span className="text-lg">🤝</span>
                  <span className="text-sm">Get Professional Help</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity & Urgent Tasks */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      <div
                        className={cn(
                          "size-2 rounded-full mt-2 shrink-0",
                          task.status === "completed"
                            ? "bg-gentle-success"
                            : task.status === "in_progress"
                              ? "bg-information-blue"
                              : "bg-muted-foreground",
                        )}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">
                          {task.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {task.status === "completed"
                            ? "Completed"
                            : task.status === "in_progress"
                              ? "In Progress"
                              : "Pending"}
                          {task.completedAt &&
                            ` • ${formatRelativeTime(task.completedAt)}`}
                        </p>
                      </div>
                      {task.priority === "urgent" && (
                        <div className="shrink-0">
                          {getPriorityBadge(task.priority)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleViewTasks}
                  className="w-full mt-4"
                >
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Urgent Tasks */}
            {urgentTasks.length > 0 && (
              <Card className="border-supportive-error/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-supportive-error">🚨</span>
                    Needs Attention
                  </CardTitle>
                  <CardDescription>
                    Tasks that require immediate action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {urgentTasks.map((task) => (
                      <div
                        key={task.id}
                        className="p-3 rounded-lg bg-supportive-error/5 border border-supportive-error/10"
                      >
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          {task.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {task.description}
                        </p>
                        {task.dueDate && (
                          <p className="text-xs text-supportive-error">
                            Due: {formatRelativeTime(task.dueDate)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    onClick={handleViewTasks}
                    emotionalState={emotionalState}
                    className="w-full mt-4"
                  >
                    Address These Tasks
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Encouragement Card for Crisis Users */}
            {emotionalState === "crisis" && (
              <Card className="border-information-blue/30 bg-information-blue/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="text-3xl">💙</div>
                    <h3 className="font-medium text-foreground">
                      You're doing great
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Managing these tasks during such a difficult time shows
                      incredible strength. Remember, you can take breaks
                      whenever you need them, and help is always available.
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
    </div>
  );
}
