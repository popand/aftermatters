"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { TraumaInformedInput } from "@/components/ui/trauma-informed-input";
import { AfterMattersLogo } from "@/components/logo";
import { mockQuestions } from "@/data/mock-data";
import { Question, EmotionalState, IntakeResponse } from "@/types";

interface IntakeWizardProps {
  emotionalState?: EmotionalState;
  onComplete?: (responses: IntakeResponse[]) => void;
  onSave?: (responses: IntakeResponse[]) => void;
  onExit?: () => void;
  className?: string;
}

export function IntakeWizard({
  emotionalState = "stable",
  onComplete,
  onSave,
  onExit,
  className,
}: IntakeWizardProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [responses, setResponses] = React.useState<Record<string, any>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isAutoSaving, setIsAutoSaving] = React.useState(false);

  const questions = mockQuestions;
  const currentQuestion = questions[currentStep];
  const totalSteps = questions.length;

  // Auto-save functionality
  React.useEffect(() => {
    const saveTimeout = setTimeout(() => {
      if (Object.keys(responses).length > 0) {
        setIsAutoSaving(true);
        setTimeout(() => {
          onSave?.(
            Object.entries(responses).map(([questionId, value]) => ({
              questionId,
              value,
              timestamp: new Date(),
            })),
          );
          setIsAutoSaving(false);
        }, 500);
      }
    }, 2000);

    return () => clearTimeout(saveTimeout);
  }, [responses, onSave]);

  const handleInputChange = (value: any) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // Clear error when user starts typing
    if (errors[currentQuestion.id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[currentQuestion.id];
        return newErrors;
      });
    }
  };

  const validateCurrentQuestion = (): boolean => {
    const value = responses[currentQuestion.id];

    if (
      currentQuestion.required &&
      (!value || (typeof value === "string" && !value.trim()))
    ) {
      setErrors((prev) => ({
        ...prev,
        [currentQuestion.id]:
          "This information helps us provide better guidance",
      }));
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validateCurrentQuestion()) {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Completed all questions
        const finalResponses = Object.entries(responses).map(
          ([questionId, value]) => ({
            questionId,
            value,
            timestamp: new Date(),
          }),
        );
        onComplete?.(finalResponses);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSkip = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const renderQuestionInput = (question: Question) => {
    const value = responses[question.id] || "";
    const error = errors[question.id];

    switch (question.type) {
      case "single":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className={cn(
                  "flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-all",
                  "hover:bg-muted/30 hover:border-primary/50",
                  value === option.value
                    ? "border-primary bg-primary/5"
                    : "border-input",
                  emotionalState === "crisis" && "p-6", // More padding for crisis users
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="mt-1 size-4 text-primary"
                />
                <div className="flex-1">
                  <div className="font-medium text-foreground">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </div>
                  )}
                </div>
              </label>
            ))}
            {error && (
              <p className="text-sm text-information-blue flex items-center gap-2">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
          </div>
        );

      case "multiple":
        const multipleValue = Array.isArray(value) ? value : [];
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <label
                key={option.value}
                className={cn(
                  "flex items-start space-x-3 p-4 rounded-lg border cursor-pointer transition-all",
                  "hover:bg-muted/30 hover:border-primary/50",
                  multipleValue.includes(option.value)
                    ? "border-primary bg-primary/5"
                    : "border-input",
                  emotionalState === "crisis" && "p-6",
                )}
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={multipleValue.includes(option.value)}
                  onChange={(e) => {
                    const newValue = e.target.checked
                      ? [...multipleValue, option.value]
                      : multipleValue.filter((v) => v !== option.value);
                    handleInputChange(newValue);
                  }}
                  className="mt-1 size-4 text-primary rounded"
                />
                <div className="flex-1">
                  <div className="font-medium text-foreground">
                    {option.label}
                  </div>
                  {option.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </div>
                  )}
                </div>
              </label>
            ))}
            {error && (
              <p className="text-sm text-information-blue flex items-center gap-2">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
          </div>
        );

      case "select":
        return (
          <div className="space-y-2">
            <select
              value={value}
              onChange={(e) => handleInputChange(e.target.value)}
              className={cn(
                "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                error && "border-information-blue",
                emotionalState === "crisis" ? "h-12 text-base" : "h-9",
              )}
            >
              <option value="">Select an option...</option>
              {question.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {error && (
              <p className="text-sm text-information-blue flex items-center gap-2">
                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                {error}
              </p>
            )}
          </div>
        );

      default:
        return (
          <TraumaInformedInput
            label=""
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            errorMessage={error}
            emotionalState={emotionalState}
            gentleValidation={true}
            placeholder={
              question.type === "text" && question.id.includes("email")
                ? "your@email.com"
                : undefined
            }
            type={question.type === "text" ? "text" : question.type}
          />
        );
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Header with glass morphism */}
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <AfterMattersLogo size="small" />
            </div>
            <div className="flex items-center space-x-4">
              {isAutoSaving && (
                <span className="text-xs text-muted-foreground">Saving...</span>
              )}
              <Button variant="gentle" size="sm" onClick={onExit}>
                Save & Exit
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={cn(
            "space-y-8",
            emotionalState === "crisis" && "space-y-10",
          )}
        >
          {/* Progress */}
          <ProgressIndicator
            current={currentStep + 1}
            total={totalSteps}
            label={`Question ${currentStep + 1} of ${totalSteps}`}
            emotionalState={emotionalState}
            showMessage={false}
          />

          {/* Question Card with enhanced styling */}
          <Card className="gentle-fade-in bg-white/70 backdrop-blur-sm border-0 shadow-modern hover:shadow-modern-lg transition-all duration-300 rounded-2xl">
            <CardHeader>
              <div className="space-y-2">
                <div className="text-sm text-primary font-medium">
                  {currentQuestion.category
                    .replace("_", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </div>
                <CardTitle
                  className={cn(
                    emotionalState === "crisis" ? "text-xl" : "text-lg",
                  )}
                >
                  {currentQuestion.title}
                </CardTitle>
                {currentQuestion.description && (
                  <CardDescription
                    className={cn(
                      emotionalState === "crisis" ? "text-base" : "text-sm",
                    )}
                  >
                    {currentQuestion.description}
                  </CardDescription>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {renderQuestionInput(currentQuestion)}

              {currentQuestion.helpText && (
                <details className="text-sm">
                  <summary className="cursor-pointer text-primary hover:text-primary/80 font-medium">
                    Why do we ask this?
                  </summary>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {currentQuestion.helpText}
                  </p>
                </details>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div
            className={cn(
              "flex items-center justify-between",
              emotionalState === "crisis" ? "gap-4" : "gap-2",
            )}
          >
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              emotionalState={emotionalState}
            >
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {!currentQuestion.required && (
                <Button
                  variant="gentle"
                  onClick={handleSkip}
                  emotionalState={emotionalState}
                >
                  Skip for now
                </Button>
              )}

              <Button onClick={handleNext} emotionalState={emotionalState}>
                {currentStep === totalSteps - 1 ? "Complete" : "Continue"}
              </Button>
            </div>
          </div>

          {/* Encouragement */}
          {emotionalState === "crisis" && (
            <Card className="border-0 bg-gradient-to-br from-information-blue/10 to-information-blue/5 backdrop-blur-sm rounded-2xl shadow-modern">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    You're making progress. Take your time with each question,
                    and remember that you can save and come back anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
