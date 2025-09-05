"use client";

import * as React from "react";
import { LandingPage } from "@/pages/landing";
import { DashboardPage } from "@/pages/dashboard";
import { TaskPage } from "@/pages/tasks";
import { IntakeWizard } from "@/components/forms/intake-wizard";
import { Persona, EmotionalState, IntakeResponse } from "@/types";
import "./styles/globals.css";

type AppRoute =
  | "landing"
  | "intake"
  | "dashboard"
  | "tasks"
  | "help"
  | "support";

export function App() {
  const [currentRoute, setCurrentRoute] = React.useState<AppRoute>("landing");
  const [selectedPersona, setSelectedPersona] = React.useState<Persona | null>(
    null,
  );
  const [emotionalState, setEmotionalState] =
    React.useState<EmotionalState>("stable");
  const [, setIntakeResponses] = React.useState<IntakeResponse[]>([]);

  const handlePersonaSelect = (persona: Persona) => {
    console.log("Persona selected:", persona);
    setSelectedPersona(persona);
    setEmotionalState(persona.emotionalContext);

    // Navigate based on persona
    if (persona.id === "reactive") {
      setCurrentRoute("intake"); // Start with intake for bereaved users
    } else if (persona.id === "proactive") {
      setCurrentRoute("intake"); // Start with intake for planners too
    } else {
      setCurrentRoute("dashboard"); // Professional users go straight to dashboard
    }
  };

  const handleIntakeComplete = (responses: IntakeResponse[]) => {
    console.log("Intake completed:", responses);
    setIntakeResponses(responses);
    setCurrentRoute("dashboard");
  };

  const handleIntakeSave = (responses: IntakeResponse[]) => {
    console.log("Intake saved:", responses);
    setIntakeResponses(responses);
  };

  const handleNavigate = (path: string) => {
    const routeMap: Record<string, AppRoute> = {
      "/": "landing",
      "/landing": "landing",
      "/intake": "intake",
      "/dashboard": "dashboard",
      "/tasks": "tasks",
      "/help": "help",
      "/support": "support",
    };

    const route = routeMap[path] || "landing";
    console.log("Navigating to:", route);
    setCurrentRoute(route);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case "landing":
        return <LandingPage onPersonaSelect={handlePersonaSelect} />;

      case "intake":
        return (
          <IntakeWizard
            emotionalState={emotionalState}
            onComplete={handleIntakeComplete}
            onSave={handleIntakeSave}
            onExit={() => setCurrentRoute("dashboard")}
          />
        );

      case "dashboard":
        return (
          <DashboardPage
            emotionalState={emotionalState}
            onNavigate={handleNavigate}
          />
        );

      case "tasks":
        return (
          <TaskPage
            emotionalState={emotionalState}
            onNavigate={handleNavigate}
          />
        );

      case "help":
      case "support":
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center space-y-4 p-8">
              <h1 className="text-2xl font-bold text-foreground">
                {currentRoute === "help"
                  ? "Professional Help"
                  : "Support Resources"}
              </h1>
              <p className="text-muted-foreground">
                {currentRoute === "help"
                  ? "Connect with qualified professionals in your area"
                  : "Find grief support and additional resources"}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setCurrentRoute("dashboard")}
                  className="text-primary hover:text-primary/80 underline"
                >
                  ← Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return <LandingPage onPersonaSelect={handlePersonaSelect} />;
    }
  };

  return (
    <div className="app">
      {renderCurrentPage()}

      {/* Development Navigation - Remove in production */}
      {import.meta.env.MODE === "development" && (
        <div className="fixed bottom-4 right-4 bg-card border rounded-lg p-4 shadow-lg space-y-2 text-xs z-50">
          <div className="font-medium text-foreground">Dev Navigation</div>
          <div className="flex flex-wrap gap-1">
            {(
              ["landing", "intake", "dashboard", "tasks", "help"] as AppRoute[]
            ).map((route) => (
              <button
                key={route}
                onClick={() => setCurrentRoute(route)}
                className={`px-2 py-1 rounded text-xs transition-colors ${
                  currentRoute === route
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                {route}
              </button>
            ))}
          </div>
          <div className="text-muted-foreground">
            Emotional: {emotionalState}
          </div>
          <div className="text-muted-foreground">
            Persona: {selectedPersona?.id || "none"}
          </div>
        </div>
      )}
    </div>
  );
}
