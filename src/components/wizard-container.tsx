"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, X, Save } from "lucide-react";
import { AfterMattersLogo } from "@/components/logo";

interface WizardContainerProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  onSave: () => Promise<void>;
  onExit: () => void;
  children: ReactNode;
  emotionalState?: "crisis" | "stable" | "planning";
  allowBackNavigation?: boolean;
  showProgress?: boolean;
}

export function WizardContainer({
  currentStep,
  totalSteps,
  onStepChange,
  onSave,
  onExit,
  children,
  emotionalState = "stable",
  allowBackNavigation = true,
  showProgress = true,
}: WizardContainerProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header with glass morphism */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-md px-4 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AfterMattersLogo size="small" />
            {showProgress && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </span>
                <Progress value={progressPercentage} className="w-32" />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onSave}
              className="gap-2 bg-transparent"
            >
              <Save className="h-4 w-4" />
              Save Progress
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onExit}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Exit
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8">
        <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-modern rounded-2xl">
          {children}
        </Card>
      </main>

      {/* Navigation Footer */}
      <footer className="border-t border-border/50 bg-white/80 backdrop-blur-md px-4 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => onStepChange(currentStep - 1)}
            disabled={!allowBackNavigation || currentStep <= 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-3">
            <Button
              variant="ghost"
              onClick={() => onStepChange(currentStep + 1)}
              disabled={currentStep >= totalSteps}
            >
              Skip for Now
            </Button>
            <Button
              onClick={() => onStepChange(currentStep + 1)}
              disabled={currentStep >= totalSteps}
            >
              Continue
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
