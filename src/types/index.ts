// Core types for AfterMatters platform

export type ProvinceCode =
  | "AB"
  | "BC"
  | "MB"
  | "NB"
  | "NL"
  | "NS"
  | "NT"
  | "NU"
  | "ON"
  | "PE"
  | "QC"
  | "SK"
  | "YT";

export type EmotionalState = "crisis" | "overwhelmed" | "stable" | "planning";

export type UserRole = "reactive" | "proactive" | "professional" | "helper";

export type TaskPriority = "urgent" | "high" | "normal" | "low";

export type TaskDifficulty = "easy" | "medium" | "complex";

export type TaskStatus = "pending" | "in_progress" | "completed" | "skipped";

// User-related types
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  emotionalState: EmotionalState;
  province: ProvinceCode;
  createdAt: Date;
  lastActive: Date;
}

export interface UserProfile extends User {
  phone?: string;
  preferredLanguage: "en" | "fr";
  hasCompletedIntake: boolean;
  progressPercentage: number;
}

// Persona types
export interface Persona {
  id: UserRole;
  title: string;
  description: string;
  subtitle: string;
  icon: string;
  targetUsers: string[];
  keyFeatures: string[];
  ctaText: string;
  emotionalContext: EmotionalState;
}

// Intake/Questionnaire types
export interface Question {
  id: string;
  title: string;
  description?: string;
  type: "single" | "multiple" | "text" | "number" | "date" | "select";
  required: boolean;
  category: string;
  options?: QuestionOption[];
  validation?: ValidationRule[];
  helpText?: string;
  conditionalLogic?: ConditionalRule[];
  province?: ProvinceCode[];
}

export interface QuestionOption {
  label: string;
  value: string;
  description?: string;
}

export interface ValidationRule {
  type: "required" | "minLength" | "maxLength" | "pattern" | "custom";
  value?: any;
  message: string;
}

export interface ConditionalRule {
  dependsOn: string;
  condition: "equals" | "includes" | "notEquals";
  value: any;
  action: "show" | "hide" | "require";
}

export interface IntakeResponse {
  questionId: string;
  value: any;
  timestamp: Date;
}

export interface IntakeSession {
  userId: string;
  responses: IntakeResponse[];
  currentStep: number;
  totalSteps: number;
  completedCategories: string[];
  lastSaved: Date;
  emotionalState: EmotionalState;
}

// Task-related types
export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: TaskPriority;
  difficulty: TaskDifficulty;
  status: TaskStatus;
  dueDate?: Date;
  estimatedTime?: number; // in minutes
  province: ProvinceCode;
  resources: TaskResource[];
  steps: TaskStep[];
  completedAt?: Date;
  dependencies?: string[]; // IDs of tasks that must be completed first
}

export interface TaskCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  tasks: Task[];
  completionPercentage: number;
  totalTasks: number;
  completedTasks: number;
}

export interface TaskStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources?: TaskResource[];
}

export interface TaskResource {
  id: string;
  title: string;
  type: "form" | "website" | "phone" | "document" | "guide";
  url?: string;
  phone?: string;
  description?: string;
  province?: ProvinceCode;
}

// Progress tracking
export interface ProgressState {
  userId: string;
  overallPercentage: number;
  completedTasks: number;
  totalTasks: number;
  categoriesProgress: Record<string, number>;
  currentPhase: "intake" | "planning" | "execution" | "completion";
  lastUpdated: Date;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  completedAt?: Date;
  celebrationMessage?: string;
}

// Provincial content types
export interface ProvincialContent {
  province: ProvinceCode;
  language: "en" | "fr";
  legalTerminology: Record<string, string>;
  requirements: ProvincialRequirement[];
  resources: ProvincialResource[];
  deadlines: ProvincialDeadline[];
}

export interface ProvincialRequirement {
  id: string;
  name: string;
  description: string;
  required: boolean;
  deadline?: string;
  authority: string;
  forms: string[];
  cost?: number;
}

export interface ProvincialResource {
  id: string;
  name: string;
  type: "government" | "court" | "registry" | "professional";
  url?: string;
  phone?: string;
  address?: string;
  hours?: string;
  services: string[];
}

export interface ProvincialDeadline {
  task: string;
  deadline: string;
  consequences?: string;
  extensions?: string;
}

// Component prop types
export interface TraumaInformedProps {
  emotionalState?: EmotionalState;
  supportLevel?: "minimal" | "guided" | "full";
  allowSkip?: boolean;
  saveProgress?: boolean;
  gentleValidation?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "checkbox" | "radio" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: ValidationRule[];
  helpText?: string;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  children?: NavigationItem[];
  requiredRole?: UserRole[];
  emotionalStates?: EmotionalState[];
}
