"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Persona } from "@/types";

export interface PersonaCardProps {
  persona: Persona;
  onSelect: (persona: Persona) => void;
  className?: string;
}

export function PersonaCard({
  persona,
  onSelect,
  className,
}: PersonaCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClick = () => {
    onSelect(persona);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(persona);
    }
  };

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "border-2 hover:border-primary/50",
        isHovered && "shadow-md border-primary/50",
        className,
      )}
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Select ${persona.title} persona`}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <span className="text-2xl" role="img" aria-hidden="true">
            {persona.icon}
          </span>
        </div>
        <CardTitle className="text-lg">{persona.title}</CardTitle>
        <CardDescription className="text-sm">
          {persona.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {persona.description}
        </p>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">
            This path is right for you if:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {persona.targetUsers.map((user, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">•</span>
                <span>{user}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">
            What you'll get:
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {persona.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-secondary mt-1 shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          className="w-full mt-6"
          size="lg"
          emotionalState={persona.emotionalContext}
          onClick={handleClick}
        >
          {persona.ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}
