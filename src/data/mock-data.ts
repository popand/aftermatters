import {
  Task,
  TaskCategory,
  Question,
  UserProfile,
  ProgressState,
} from "@/types";

// Mock user profiles
export const mockUsers: UserProfile[] = [
  {
    id: "user-1",
    email: "sarah.thompson@email.com",
    name: "Sarah Thompson",
    role: "reactive",
    emotionalState: "crisis",
    province: "ON",
    preferredLanguage: "en",
    hasCompletedIntake: false,
    progressPercentage: 15,
    createdAt: new Date("2024-01-15"),
    lastActive: new Date(),
  },
  {
    id: "user-2",
    email: "david.chen@email.com",
    name: "David Chen",
    role: "proactive",
    emotionalState: "planning",
    province: "BC",
    preferredLanguage: "en",
    hasCompletedIntake: true,
    progressPercentage: 67,
    createdAt: new Date("2023-11-20"),
    lastActive: new Date(),
  },
];

// Mock intake questions
export const mockQuestions: Question[] = [
  {
    id: "basic-1",
    title: "What is your relationship to the deceased?",
    description: "This helps us provide the right guidance for your situation.",
    type: "single",
    required: true,
    category: "basic_information",
    options: [
      { label: "Spouse or partner", value: "spouse" },
      { label: "Child", value: "child" },
      { label: "Parent", value: "parent" },
      { label: "Appointed executor", value: "executor" },
      { label: "Other family member", value: "family_other" },
      { label: "Friend or other", value: "other" },
    ],
    helpText:
      "If you're unsure about your legal role, that's completely normal. We can help you figure this out as we go.",
  },
  {
    id: "basic-2",
    title: "In which province or territory did the death occur?",
    description:
      "This determines which legal procedures we'll guide you through.",
    type: "select",
    required: true,
    category: "basic_information",
    options: [
      { label: "Alberta", value: "AB" },
      { label: "British Columbia", value: "BC" },
      { label: "Manitoba", value: "MB" },
      { label: "New Brunswick", value: "NB" },
      { label: "Newfoundland and Labrador", value: "NL" },
      { label: "Nova Scotia", value: "NS" },
      { label: "Northwest Territories", value: "NT" },
      { label: "Nunavut", value: "NU" },
      { label: "Ontario", value: "ON" },
      { label: "Prince Edward Island", value: "PE" },
      { label: "Quebec", value: "QC" },
      { label: "Saskatchewan", value: "SK" },
      { label: "Yukon", value: "YT" },
    ],
  },
  {
    id: "estate-1",
    title: "Which of these apply to the deceased's situation?",
    description: "Select all that apply - you can always change these later.",
    type: "multiple",
    required: false,
    category: "estate_overview",
    options: [
      { label: "There is a will", value: "will_exists" },
      { label: "Owned property (house, condo, land)", value: "property_owner" },
      { label: "Owned a business", value: "business_owner" },
      { label: "Had significant investments", value: "investments" },
      { label: "Had debts or loans", value: "debts" },
      { label: "None of these apply", value: "none_of_above" },
    ],
  },
];

// Mock tasks
export const mockTasks: Task[] = [
  {
    id: "task-1",
    title: "Obtain death certificate",
    description:
      "Get multiple certified copies of the death certificate from the vital statistics office.",
    category: "immediate_actions",
    priority: "urgent",
    difficulty: "easy",
    status: "completed",
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    estimatedTime: 60,
    province: "ON",
    completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    resources: [
      {
        id: "res-1",
        title: "Ontario Vital Statistics Office",
        type: "website",
        url: "https://www.ontario.ca/page/how-get-copy-death-certificate-ontario",
        description:
          "Official website for ordering death certificates in Ontario",
      },
      {
        id: "res-2",
        title: "ServiceOntario Phone Line",
        type: "phone",
        phone: "1-800-267-8097",
        description: "Call to order death certificates by phone",
      },
    ],
    steps: [
      {
        id: "step-1",
        title: "Gather required information",
        description:
          "You'll need the deceased's full name, date of death, and place of death.",
        completed: true,
      },
      {
        id: "step-2",
        title: "Order multiple copies",
        description:
          "Order at least 10 certified copies - you'll need them for various institutions.",
        completed: true,
      },
      {
        id: "step-3",
        title: "Pay fees and wait for processing",
        description: "Standard processing takes 5-7 business days.",
        completed: true,
      },
    ],
  },
  {
    id: "task-2",
    title: "Notify financial institutions",
    description:
      "Contact banks, credit unions, and investment companies to report the death.",
    category: "financial_matters",
    priority: "high",
    difficulty: "medium",
    status: "in_progress",
    dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
    estimatedTime: 120,
    province: "ON",
    resources: [
      {
        id: "res-3",
        title: "Bank notification template",
        type: "document",
        description: "Template letter for notifying banks of death",
      },
    ],
    steps: [
      {
        id: "step-4",
        title: "List all financial institutions",
        description:
          "Make a list of all banks, credit unions, and investment companies.",
        completed: true,
      },
      {
        id: "step-5",
        title: "Contact each institution",
        description: "Call or visit each institution with a death certificate.",
        completed: false,
      },
      {
        id: "step-6",
        title: "Follow up on account closures",
        description:
          "Ensure all accounts are properly handled according to the will or provincial law.",
        completed: false,
      },
    ],
  },
  {
    id: "task-3",
    title: "Apply for probate",
    description:
      "Submit application to the court for certificate of appointment of estate trustee.",
    category: "legal_matters",
    priority: "normal",
    difficulty: "complex",
    status: "pending",
    dueDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 3 months from now
    estimatedTime: 240,
    province: "ON",
    resources: [
      {
        id: "res-4",
        title: "Ontario Superior Court of Justice",
        type: "website",
        url: "https://www.ontariocourtforms.on.ca/english/sco/",
        description: "Official court forms and information",
      },
      {
        id: "res-5",
        title: "Estate Law Firm Directory",
        type: "guide",
        description: "Find qualified estate lawyers in your area",
      },
    ],
    steps: [
      {
        id: "step-7",
        title: "Determine if probate is required",
        description: "Check if the estate value and assets require probate.",
        completed: false,
      },
      {
        id: "step-8",
        title: "Gather required documents",
        description:
          "Collect the will, death certificate, and asset valuations.",
        completed: false,
      },
      {
        id: "step-9",
        title: "Complete court application",
        description: "Fill out and file the required court forms.",
        completed: false,
      },
    ],
  },
];

// Mock task categories
export const mockTaskCategories: TaskCategory[] = [
  {
    id: "immediate_actions",
    name: "Immediate Actions",
    description: "Tasks that need to be completed within the first few weeks",
    icon: "🚨",
    color: "#CD919E", // supportive-error color for urgent but not alarming
    tasks: mockTasks.filter((task) => task.category === "immediate_actions"),
    completionPercentage: 100,
    totalTasks: 1,
    completedTasks: 1,
  },
  {
    id: "financial_matters",
    name: "Financial Matters",
    description: "Banking, investments, and financial account management",
    icon: "💰",
    color: "#4A90A4", // primary blue
    tasks: mockTasks.filter((task) => task.category === "financial_matters"),
    completionPercentage: 33,
    totalTasks: 1,
    completedTasks: 0,
  },
  {
    id: "legal_matters",
    name: "Legal Matters",
    description: "Probate, court applications, and legal procedures",
    icon: "⚖️",
    color: "#7BA05B", // secondary green
    tasks: mockTasks.filter((task) => task.category === "legal_matters"),
    completionPercentage: 0,
    totalTasks: 1,
    completedTasks: 0,
  },
];

// Mock progress state
export const mockProgressState: ProgressState = {
  userId: "user-1",
  overallPercentage: 25,
  completedTasks: 1,
  totalTasks: 3,
  categoriesProgress: {
    immediate_actions: 100,
    financial_matters: 33,
    legal_matters: 0,
  },
  currentPhase: "execution",
  lastUpdated: new Date(),
  milestones: [
    {
      id: "milestone-1",
      title: "First Steps Complete",
      description: "You've completed the most urgent initial tasks",
      completed: true,
      completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      celebrationMessage:
        "Great job completing these difficult first steps. You're making real progress.",
    },
    {
      id: "milestone-2",
      title: "Financial Accounts Secured",
      description: "All financial institutions have been notified",
      completed: false,
    },
    {
      id: "milestone-3",
      title: "Legal Process Initiated",
      description: "Probate or estate administration process has begun",
      completed: false,
    },
  ],
};
