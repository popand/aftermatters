"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { HelpCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionOption {
  label: string;
  value: string;
  description?: string;
}

interface Question {
  id: string;
  title: string;
  description?: string;
  type: "single" | "multiple" | "text" | "textarea" | "number" | "date";
  required: boolean;
  options?: QuestionOption[];
  helpText?: string;
  placeholder?: string;
}

interface QuestionCardProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
  onValidation?: (isValid: boolean, message?: string) => void;
  emotionalState?: "crisis" | "stable" | "planning";
  allowSkip?: boolean;
  className?: string;
}

export function QuestionCard({
  question,
  value,
  onChange,
  onValidation,
  emotionalState = "stable",
  allowSkip = true,
  className,
}: QuestionCardProps) {
  const [showHelp, setShowHelp] = useState(false);
  const [validationMessage, setValidationMessage] = useState<string>();

  const handleValueChange = (newValue: any) => {
    onChange(newValue);

    // Basic validation
    if (question.required && (!newValue || newValue === "")) {
      setValidationMessage("This field is required");
      onValidation?.(false, "This field is required");
    } else {
      setValidationMessage(undefined);
      onValidation?.(true);
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case "single":
        return (
          <RadioGroup value={value} onValueChange={handleValueChange}>
            {question.options?.map((option) => (
              <div
                key={option.value}
                className="flex items-start space-x-3 space-y-0"
              >
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </Label>
                  {option.description && (
                    <p className="text-xs text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </RadioGroup>
        );

      case "multiple":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div
                key={option.value}
                className="flex items-start space-x-3 space-y-0"
              >
                <Checkbox
                  id={option.value}
                  checked={Array.isArray(value) && value.includes(option.value)}
                  onCheckedChange={(checked) => {
                    const currentValues = Array.isArray(value) ? value : [];
                    if (checked) {
                      handleValueChange([...currentValues, option.value]);
                    } else {
                      handleValueChange(
                        currentValues.filter((v) => v !== option.value),
                      );
                    }
                  }}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor={option.value}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </Label>
                  {option.description && (
                    <p className="text-xs text-muted-foreground">
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case "textarea":
        return (
          <Textarea
            value={value || ""}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder={question.placeholder}
            className="min-h-[100px] resize-none"
          />
        );

      case "text":
      case "number":
      case "date":
        return (
          <Input
            type={
              question.type === "number"
                ? "number"
                : question.type === "date"
                  ? "date"
                  : "text"
            }
            value={value || ""}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder={question.placeholder}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-lg leading-relaxed">
              {question.title}
              {question.required && (
                <span className="text-destructive ml-1">*</span>
              )}
            </CardTitle>
            {question.description && (
              <CardDescription className="text-base leading-relaxed">
                {question.description}
              </CardDescription>
            )}
          </div>
          {question.helpText && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHelp(!showHelp)}
              className="shrink-0 gap-2"
            >
              <HelpCircle className="h-4 w-4" />
              Help
            </Button>
          )}
        </div>

        {showHelp && question.helpText && (
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {question.helpText}
            </p>
          </div>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        {renderInput()}

        {validationMessage && (
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {validationMessage}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
