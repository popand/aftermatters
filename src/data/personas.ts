import { Persona } from "@/types";

export const personas: Persona[] = [
  {
    id: "reactive",
    title: "Recently Bereaved",
    subtitle: "I recently lost someone and need immediate guidance",
    description:
      "You're dealing with the immediate aftermath of losing someone important to you. This is an incredibly difficult time, and we're here to guide you through the necessary steps with care and compassion.",
    icon: "💙",
    targetUsers: [
      "You lost a spouse, parent, or close family member",
      "You're feeling overwhelmed by legal and administrative tasks",
      "You need to handle urgent matters but don't know where to start",
      "You want step-by-step guidance through this difficult process",
    ],
    keyFeatures: [
      "Immediate action checklist for the first 30 days",
      "Gentle, step-by-step guidance",
      "Crisis-mode interface with larger, clearer buttons",
      "Access to grief support resources",
      "Priority task organization based on deadlines",
    ],
    ctaText: "Get Immediate Help",
    emotionalContext: "crisis",
  },
  {
    id: "proactive",
    title: "Planning Ahead",
    subtitle: "I want to organize my affairs before it's needed",
    description:
      "You're taking the responsible step of planning ahead, ensuring your loved ones won't have to navigate these complex processes during a time of grief. This shows great care for your family's future.",
    icon: "📋",
    targetUsers: [
      "You want to prepare your estate in advance",
      "You've been diagnosed with an illness and want to plan",
      "You want to reduce the burden on your family",
      "You're interested in comprehensive estate organization",
    ],
    keyFeatures: [
      "Complete estate planning questionnaire",
      "Document organization system",
      "Regular check-ins and updates",
      "Family sharing and communication tools",
      "Professional referral network",
    ],
    ctaText: "Start Planning",
    emotionalContext: "planning",
  },
  {
    id: "professional",
    title: "Professional Helper",
    subtitle: "I help clients with estate and legal matters",
    description:
      "You're a legal professional, financial advisor, or other expert who wants to provide enhanced service to your clients through our platform's comprehensive tools and resources.",
    icon: "⚖️",
    targetUsers: [
      "You're a lawyer specializing in estates",
      "You're a financial advisor or accountant",
      "You work with bereaved families professionally",
      "You want to streamline your client services",
    ],
    keyFeatures: [
      "White-label customization options",
      "Client progress monitoring dashboard",
      "Professional resource library",
      "Multi-client management tools",
      "Integration with existing practice systems",
    ],
    ctaText: "Explore Professional Tools",
    emotionalContext: "stable",
  },
];
