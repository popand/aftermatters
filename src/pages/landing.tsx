"use client";

import { useState } from "react";
import { WizardContainer } from "@/components/wizard-container";
import { QuestionCard } from "@/components/question-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AfterMattersLogo } from "@/components/logo";
import { Heart, Shield, Users, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { personas } from "@/data/personas";
import { Persona } from "@/types";

const sampleQuestions = [
  {
    id: "relationship",
    title: "What was your relationship to the deceased?",
    description:
      "This helps us understand your role in the estate settlement process.",
    type: "single" as const,
    required: true,
    options: [
      { label: "Spouse or Partner", value: "spouse" },
      { label: "Child", value: "child" },
      { label: "Parent", value: "parent" },
      { label: "Sibling", value: "sibling" },
      { label: "Other Family Member", value: "family" },
      { label: "Friend or Executor", value: "executor" },
    ],
    helpText:
      "Your relationship determines your legal standing and responsibilities in the estate process.",
  },
  {
    id: "province",
    title: "In which province or territory did the deceased reside?",
    description:
      "Estate laws vary by province, so we need to ensure we provide accurate guidance.",
    type: "single" as const,
    required: true,
    options: [
      { label: "Alberta", value: "AB" },
      { label: "British Columbia", value: "BC" },
      { label: "Manitoba", value: "MB" },
      { label: "New Brunswick", value: "NB" },
      { label: "Newfoundland and Labrador", value: "NL" },
      { label: "Northwest Territories", value: "NT" },
      { label: "Nova Scotia", value: "NS" },
      { label: "Nunavut", value: "NU" },
      { label: "Ontario", value: "ON" },
      { label: "Prince Edward Island", value: "PE" },
      { label: "Quebec", value: "QC" },
      { label: "Saskatchewan", value: "SK" },
      { label: "Yukon", value: "YT" },
    ],
    helpText:
      "Each province has different estate laws, probate requirements, and tax implications.",
  },
  {
    id: "will_exists",
    title: "Did the deceased leave a will?",
    description: "This significantly affects how the estate will be handled.",
    type: "single" as const,
    required: true,
    options: [
      { label: "Yes, there is a will", value: "yes" },
      { label: "No, there is no will", value: "no" },
      { label: "I'm not sure", value: "unsure" },
    ],
    helpText:
      "If there's no will, the estate will be distributed according to provincial intestacy laws.",
  },
];

export interface LandingPageProps {
  onPersonaSelect?: (persona: Persona) => void;
  className?: string;
}

export function LandingPage({ onPersonaSelect, className }: LandingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showWizard, setShowWizard] = useState(false);

  const handlePersonaSelect = (persona: Persona) => {
    console.log("Selected persona:", persona.id);
    onPersonaSelect?.(persona);
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSave = async () => {
    // Save progress logic here
    console.log("Saving progress:", answers);
  };

  const handleExit = () => {
    setShowWizard(false);
    setCurrentStep(0);
  };

  if (showWizard) {
    return (
      <WizardContainer
        currentStep={currentStep + 1}
        totalSteps={sampleQuestions.length}
        onStepChange={(step) => setCurrentStep(step - 1)}
        onSave={handleSave}
        onExit={handleExit}
      >
        {currentStep < sampleQuestions.length && (
          <QuestionCard
            question={sampleQuestions[currentStep]}
            value={answers[sampleQuestions[currentStep].id]}
            onChange={(value) =>
              handleAnswerChange(sampleQuestions[currentStep].id, value)
            }
          />
        )}
      </WizardContainer>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20">
      <header className="border-b border-border/50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AfterMattersLogo size="small" />
            </div>
            <Button variant="outline" className="bg-white/50 hover:bg-white/80">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-emerald-500/5 to-teal-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)]"></div>

        <div className="absolute top-1/4 left-1/6 opacity-30 animate-float">
          <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-25 animate-float-delayed">
          <div className="w-3 h-3 bg-secondary/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 opacity-35 animate-float-slow">
          <div className="w-1.5 h-1.5 bg-emerald-400/50 rounded-full"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32">
          <div className="text-center space-y-12">
            <div className="space-y-8 max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.1] text-balance tracking-tight">
                When life changes
                <span className="block text-primary font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  everything
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed text-pretty max-w-4xl mx-auto font-light">
                Navigate estate settlement with compassionate guidance designed
                for your healing journey. We're here to help you through every
                step, at your own pace.
              </p>
            </div>

            <div className="pt-12">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button
                  size="lg"
                  onClick={() => setShowWizard(true)}
                  className="gap-3 px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-r from-primary via-primary to-secondary hover:from-primary/90 hover:via-primary/95 hover:to-secondary/90 transform hover:scale-105 text-primary-foreground"
                >
                  Begin Your Journey
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-12 py-6 text-lg rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 bg-white/40 backdrop-blur-md hover:bg-white/60 text-foreground"
                >
                  How It Works
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-base">
                <div className="flex items-center gap-3 bg-white/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all duration-300">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80 font-medium">
                    Privacy First
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all duration-300">
                  <Heart className="h-5 w-5 text-secondary" />
                  <span className="text-foreground/80 font-medium">
                    Trauma-Informed
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 hover:bg-white/70 transition-all duration-300">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-foreground/80 font-medium">
                    Canada-Wide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 bg-gradient-to-b from-white/50 to-primary/5">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-balance">
            Thoughtfully designed for
            <span className="block text-secondary font-medium">
              your healing journey
            </span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Every feature is crafted with empathy, understanding the unique
            challenges you face during this time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-2xl">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/15 to-primary/25 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2 font-medium">
                Trauma-Informed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed text-muted-foreground">
                Designed with deep empathy for those experiencing grief and
                loss.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-2xl">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary/15 to-secondary/25 rounded-2xl flex items-center justify-center">
                <FileText className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl mb-2 font-medium">
                Legal Guidance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed text-muted-foreground">
                Province-specific support ensuring compliance with local estate
                laws.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-2xl">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/15 to-primary/25 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2 font-medium">
                Expert Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed text-muted-foreground">
                Access to qualified professionals when you need additional
                guidance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 rounded-2xl">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary/15 to-secondary/25 rounded-2xl flex items-center justify-center">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-xl mb-2 font-medium">
                Accessible Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed text-muted-foreground">
                WCAG compliant with clear navigation and gentle interactions.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-white/60 backdrop-blur-md mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; 2024 AfterMatters. Providing compassionate estate
              settlement support across Canada.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HomePage() {
  return <LandingPage />;
}
