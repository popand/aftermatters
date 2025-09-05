# AfterMatters - User Experience Design Document

## Phase 0: UX Foundation & Design System

**Document Version**: 1.0  
**Date**: September 5, 2024  
**Status**: Foundation Design for Phase 0 Implementation

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [User Personas](#user-personas)
3. [User Journey Maps](#user-journey-maps)
4. [Trauma-Informed Design Principles](#trauma-informed-design-principles)
5. [Information Architecture](#information-architecture)
6. [Design System](#design-system)
7. [Page Layouts & Wireframes](#page-layouts--wireframes)
8. [Component Specifications](#component-specifications)
9. [Accessibility Guidelines](#accessibility-guidelines)
10. [Province-Specific UX Considerations](#province-specific-ux-considerations)
11. [Technical UX Requirements](#technical-ux-requirements)

---

## Executive Summary

AfterMatters requires a trauma-informed user experience that guides users through complex estate settlement processes while maintaining emotional safety and legal compliance across all 13 Canadian provinces. This UX design document establishes the foundational design system and user experience patterns that prioritize empathy, clarity, and accessibility for users experiencing grief and loss.

### Key UX Objectives

- **Emotional Safety**: Every interaction designed to support, not overwhelm
- **Progressive Disclosure**: Information revealed at appropriate pace and context
- **Legal Compliance**: Province-specific workflows handled seamlessly
- **Accessibility First**: WCAG 2.2 AA compliance with grief-sensitive design patterns
- **Multi-Device Support**: Responsive design for web and mobile experiences

---

## User Personas

### Primary Personas

#### 1. The Reactive User (Recently Bereaved)

**Profile**: Sarah, 45, recently lost her husband unexpectedly. Has two teenage children and limited knowledge of estate processes.

**Demographics**:

- Age: 35-65
- Technology comfort: Basic to intermediate
- Emotional state: Overwhelmed, grieving, time-pressured
- Legal knowledge: Minimal to none

**Goals**:

- Complete necessary legal and administrative tasks quickly
- Understand what needs to be done and when
- Ensure family financial security
- Avoid making costly mistakes

**Pain Points**:

- Doesn't know where to start
- Overwhelmed by legal terminology
- Afraid of missing critical deadlines
- Struggling with cognitive load due to grief

**UX Needs**:

- Clear, step-by-step guidance
- Gentle error handling and validation
- Progress tracking without pressure
- Easy-to-understand explanations
- Quick access to help and support

#### 2. The Proactive Planner (Preparing for Future)

**Profile**: David, 58, diagnosed with a chronic illness. Wants to prepare his affairs to reduce burden on his family.

**Demographics**:

- Age: 40-75
- Technology comfort: Intermediate
- Emotional state: Concerned but determined
- Legal knowledge: Some basic understanding

**Goals**:

- Organize personal affairs systematically
- Create clear documentation for family
- Ensure legal compliance
- Reduce stress for loved ones

**Pain Points**:

- Uncertainty about completeness
- Complex legal requirements
- Keeping information current
- Coordinating with professionals

**UX Needs**:

- Comprehensive planning tools
- Document organization system
- Regular update reminders
- Professional integration options
- Family sharing capabilities

#### 3. The Professional User (Assisting Clients)

**Profile**: Jennifer, 42, estate lawyer who wants to provide better client service through digital tools.

**Demographics**:

- Age: 30-60
- Technology comfort: Advanced
- Professional context: Legal/financial services
- Client-focused priorities

**Goals**:

- Streamline client onboarding
- Provide value-added services
- Differentiate from competitors
- Improve client outcomes

**Pain Points**:

- Time-consuming client education
- Incomplete client information
- Managing multiple client cases
- Keeping up with provincial variations

**UX Needs**:

- White-label customization options
- Client progress monitoring
- Professional dashboard features
- Multi-client management tools
- Integration with existing systems

### Secondary Personas

#### 4. The Adult Child Helper

**Profile**: Michael, 38, helping his aging parents organize their affairs.

- **Key needs**: Family collaboration tools, guided conversations, document sharing
- **Pain points**: Sensitive family dynamics, coordinating multiple parties

#### 5. The Solo Ager

**Profile**: Patricia, 72, widowed with no children, planning independently.

- **Key needs**: Professional connections, simplified interfaces, clear next steps
- **Pain points**: Limited family support, complex decisions alone

#### 6. The Military/First Responder

**Profile**: James, 34, RCMP officer concerned about line-of-duty risks.

- **Key needs**: Quick setup, deployment-ready access, beneficiary management
- **Pain points**: Frequent relocations, high-risk profession, time constraints

---

## User Journey Maps

### Journey 1: Reactive User - Post-Death Estate Settlement

#### Phase 1: Crisis & Initial Contact (Days 1-7)

**Emotional State**: Shock, overwhelm, urgent need for guidance

**Touchpoints**:

1. **Discovery**: Finds AfterMatters through search or referral
2. **Landing Page**: Immediately understands this is for their situation
3. **Persona Selection**: Identifies as "Recently Bereaved" user
4. **Immediate Actions Checklist**: Gets critical first-week tasks
5. **Quick Registration**: Minimal friction sign-up process

**Key UX Requirements**:

- Calm, supportive visual design
- Clear value proposition for crisis situation
- Immediate actionable guidance
- Simple registration process
- Crisis-appropriate language and tone

#### Phase 2: Information Gathering (Days 7-21)

**Emotional State**: Still grieving but more focused, building momentum

**Touchpoints**:

1. **Smart Intake Wizard**: Progressive questionnaire (1-3 questions per step)
2. **Save & Resume**: Ability to pause and return
3. **Help System**: Contextual explanations and support
4. **Progress Tracking**: Visual progress without pressure
5. **Document Upload**: Secure storage for important papers

**Key UX Requirements**:

- Progressive disclosure pattern
- Gentle validation messages
- Clear progress indicators
- "Why we ask this" explanations
- Trauma-informed question sequencing

#### Phase 3: Action Planning (Days 21-90)

**Emotional State**: More stable, ready to tackle systematic tasks

**Touchpoints**:

1. **Personalized Checklist**: Generated based on intake responses
2. **Task Organization**: Categorized by urgency and complexity
3. **Resource Links**: Direct connections to forms and contacts
4. **Completion Tracking**: Sense of accomplishment and progress
5. **Professional Referrals**: Access to experts when needed

**Key UX Requirements**:

- Clear task prioritization
- Completion celebration patterns
- Easy access to professional help
- Province-specific resource integration
- Flexibility to handle unique situations

#### Phase 4: Long-term Management (3-12 months)

**Emotional State**: Healing while managing ongoing responsibilities

**Touchpoints**:

1. **Dashboard Overview**: High-level status and remaining tasks
2. **Deadline Reminders**: Gentle notifications for time-sensitive items
3. **Document Vault**: Organized storage and sharing
4. **Final Wrap-up**: Completion ceremonies and next steps
5. **Legacy Planning**: Preparation for their own future

**Key UX Requirements**:

- Graduation from crisis mode to stability
- Transition to proactive planning tools
- Celebration of completion
- Bridge to legacy planning features

### Journey 2: Proactive User - Estate Preparation

#### Phase 1: Awareness & Motivation (Planning Stage)

**Emotional State**: Thoughtful, methodical, possibly anxious about mortality

**Touchpoints**:

1. **Educational Content**: Understanding estate planning importance
2. **Assessment Tools**: Current state evaluation
3. **Goal Setting**: Defining personal objectives
4. **Timeline Planning**: Realistic implementation schedule

#### Phase 2: Information Organization (Documentation Stage)

**Emotional State**: Engaged, systematic, building confidence

**Touchpoints**:

1. **Comprehensive Intake**: Detailed life inventory
2. **Document Assembly**: Gathering existing legal documents
3. **Gap Analysis**: Identifying missing elements
4. **Professional Consultation**: Expert guidance integration

#### Phase 3: Implementation & Maintenance (Active Management)

**Emotional State**: Empowered, responsible, peace of mind

**Touchpoints**:

1. **Plan Execution**: Implementing recommendations
2. **Regular Updates**: Keeping information current
3. **Family Coordination**: Sharing appropriate information
4. **Professional Integration**: Working with advisors

---

## Trauma-Informed Design Principles

### Core Principles

#### 1. Safety First

**Physical and Emotional Safety**: Every design decision prioritizes user emotional safety and builds trust.

**Implementation**:

- Warm, calming color palette (soft blues, gentle greens, warm neutrals)
- Generous white space to reduce visual overwhelm
- Consistent, predictable navigation patterns
- No sudden changes or pop-ups that might startle
- Clear escape routes from any process

#### 2. Trustworthiness and Transparency

**Building and Maintaining Trust**: Users must feel confident in the platform's reliability and security.

**Implementation**:

- Clear privacy policy and data handling explanations
- Visible security indicators and certifications
- Transparent about what happens to their information
- Honest about limitations and when professional help is needed
- Regular communication about platform updates and changes

#### 3. Peer Support and Mutuality

**Community and Shared Experience**: Recognizing that others have successfully navigated similar challenges.

**Implementation**:

- Testimonials from real users (with permission)
- "Others like you have found this helpful" messaging
- Option to connect with support groups or communities
- Professional referrals to grief counselors and support services

#### 4. Collaboration and Choice

**User Empowerment and Control**: Users maintain control over their experience and decisions.

**Implementation**:

- Multiple path options through complex processes
- Ability to skip or return to sections
- Clear opt-in/opt-out for all communications
- User-controlled pace and timing
- Multiple format options (digital, print, email)

#### 5. Cultural, Historical, and Gender Considerations

**Inclusive and Culturally Sensitive Design**: Recognizing diverse backgrounds and experiences.

**Implementation**:

- Inclusive imagery representing diverse Canadian families
- Recognition of different family structures and relationships
- Cultural considerations for grief and death customs
- Gender-neutral language where appropriate
- Indigenous and multicultural considerations

### Specific Trauma-Informed UX Patterns

#### Progressive Disclosure

**Principle**: Information revealed gradually to prevent cognitive overload.

**Implementation**:

```
Wizard Structure:
Step 1: Basic Information (2-3 questions)
Step 2: Family Situation (1-3 questions)
Step 3: Financial Overview (2-3 questions)
...continuing with manageable chunks
```

#### Gentle Error Handling

**Principle**: Mistakes are normal and handled with compassion.

**Examples**:

- ❌ **Harsh**: "Error: Required field missing"
- ✅ **Gentle**: "We need this information to help you - would you like to add it now or skip for later?"

#### Affirming Language Patterns

**Principle**: Language acknowledges difficulty while building confidence.

**Examples**:

- "This is a difficult time, and you're doing great by taking these steps"
- "Many people find this section challenging - take your time"
- "You've completed X of Y steps - you're making real progress"

#### Flexible Pacing Controls

**Principle**: Users control the speed and intensity of their experience.

**Implementation**:

- "Save and Continue Later" always available
- No time pressure or countdown timers
- Ability to go back and modify previous answers
- Clear exit points without losing progress

---

## Information Architecture

### Primary Navigation Structure

```
AfterMatters Platform
├── Home Dashboard
│   ├── Progress Overview
│   ├── Urgent Tasks
│   ├── Recent Activity
│   └── Quick Actions
├── My Journey
│   ├── Smart Intake Wizard
│   ├── Personalized Checklist
│   ├── Task Details & Resources
│   └── Completion Tracking
├── Documents & Vault
│   ├── Document Upload
│   ├── Organized Storage
│   ├── Sharing Controls
│   └── Access Management
├── Professional Help
│   ├── Find Local Professionals
│   ├── Service Referrals
│   ├── Cost Estimates
│   └── Appointment Booking
├── Resources & Support
│   ├── Provincial Guides
│   ├── Legal Information
│   ├── Grief Support
│   └── FAQ & Help Center
└── Account & Settings
    ├── Profile Management
    ├── Privacy Controls
    ├── Notification Settings
    └── Family Access
```

### Content Hierarchy Principles

#### Level 1: Essential Actions

- Immediate next steps
- Critical deadlines
- Emergency contacts
- Progress overview

#### Level 2: Detailed Guidance

- Step-by-step processes
- Form requirements
- Resource connections
- Professional help

#### Level 3: Supporting Information

- Legal explanations
- Educational content
- FAQ answers
- Background resources

### Province-Specific Content Architecture

Each province maintains consistent structure with localized content:

```
Provincial Content Structure:
├── Legal Requirements
│   ├── Death Certificate Process
│   ├── Probate Procedures
│   ├── Court Information
│   └── Timeline Requirements
├── Government Services
│   ├── Health Care Cancellation
│   ├── License & Registration
│   ├── Benefit Applications
│   └── Tax Obligations
├── Financial Institutions
│   ├── Local Bank Procedures
│   ├── Credit Union Processes
│   ├── Insurance Requirements
│   └── Investment Management
└── Professional Services
    ├── Local Legal Services
    ├── Financial Advisors
    ├── Funeral Directors
    └── Support Groups
```

---

## Design System

### Color Palette

#### Primary Colors (Trauma-Informed Selection)

- **Primary Blue**: #4A90A4 (Calm, trustworthy)
- **Secondary Green**: #7BA05B (Natural, healing)
- **Neutral Warm**: #F5F5F3 (Soft, non-stark background)
- **Text Dark**: #2C3E50 (High contrast, readable)
- **Text Light**: #6C7B7F (Secondary information)

#### Emotional State Colors

- **Gentle Success**: #8FBC8F (Soft accomplishment)
- **Careful Warning**: #DEB887 (Non-alarming alerts)
- **Supportive Error**: #CD919E (Compassionate corrections)
- **Information Blue**: #87CEEB (Helpful guidance)

#### Accessibility Compliance

- All color combinations meet WCAG 2.2 AA standards (4.5:1 contrast ratio minimum)
- Color is never the only means of conveying information
- High contrast mode alternative available

### Typography

#### Font Families

- **Primary**: Inter (Clean, highly legible sans-serif)
- **Secondary**: Source Sans Pro (Friendly, approachable)
- **Accent**: Merriweather (Warm serif for important headings)

#### Type Scale (Responsive)

```css
/* Desktop Sizes */
h1: 2.5rem (40px) - Page titles
h2: 2rem (32px) - Section headers
h3: 1.5rem (24px) - Subsection headers
h4: 1.25rem (20px) - Component headers
body: 1rem (16px) - Base text
small: 0.875rem (14px) - Secondary information

/* Mobile Adjustments */
h1: 2rem (32px)
h2: 1.75rem (28px)
h3: 1.25rem (20px)
h4: 1.125rem (18px)
body: 1rem (16px)
small: 0.875rem (14px)
```

#### Typography Guidelines

- Line height: 1.6 for body text (improved readability for stressed users)
- Letter spacing: Slightly increased for headings (0.025em)
- Font weight: Regular (400) for body, Medium (500) for emphasis, Bold (600) for headings
- No all-caps text (can feel aggressive to traumatized users)

### Spacing System

#### Base Unit: 8px Grid System

```
xs: 4px   (0.25rem)
sm: 8px   (0.5rem)
md: 16px  (1rem)
lg: 24px  (1.5rem)
xl: 32px  (2rem)
xxl: 48px (3rem)
xxxl: 64px (4rem)
```

#### Component Spacing

- **Buttons**: Minimum 44px height (accessible touch targets)
- **Form Fields**: 16px padding, 8px between labels and inputs
- **Cards**: 24px internal padding, 16px between cards
- **Sections**: 48px between major sections

### Component Specifications

#### Primary Button (Call-to-Action)

```css
.btn-primary {
  background: #4a90a4;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  min-height: 44px;
  transition: background 0.2s ease;
  border: 2px solid transparent;
}

.btn-primary:hover {
  background: #3a7a8e;
  transform: none; /* No jarring animations */
}

.btn-primary:focus {
  border-color: #2c3e50;
  outline: none;
}
```

#### Secondary Button (Alternative Actions)

```css
.btn-secondary {
  background: transparent;
  color: #4a90a4;
  padding: 12px 24px;
  border: 2px solid #4a90a4;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  min-height: 44px;
}
```

#### Gentle Button (Skip/Later Actions)

```css
.btn-gentle {
  background: transparent;
  color: #6c7b7f;
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  font-size: 0.875rem;
}
```

#### Form Input Fields

```css
.form-input {
  padding: 12px 16px;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 44px;
  width: 100%;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  border-color: #4a90a4;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 164, 0.1);
}

.form-input.error {
  border-color: #cd919e;
}

.form-input.success {
  border-color: #8fbc8f;
}
```

#### Progress Indicators

```css
.progress-bar {
  background: #f0f0f0;
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
}

.progress-fill {
  background: linear-gradient(to right, #7ba05b, #4a90a4);
  height: 100%;
  transition: width 0.3s ease;
}
```

#### Card Components

```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

---

## Page Layouts & Wireframes

### Landing Page Layout

#### Desktop Layout (1200px+)

```
Header (Navigation + CTA)
├── Hero Section
│   ├── Headline: "We're here to guide you through this difficult time"
│   ├── Subheading: "Step-by-step estate settlement help for all Canadian provinces"
│   ├── Primary CTA: "Get Started Now"
│   └── Secondary CTA: "Learn More"
├── Persona Selection Cards
│   ├── "I recently lost someone" (Reactive)
│   ├── "I want to prepare my affairs" (Proactive)
│   └── "I'm a professional helper" (B2B)
├── Trust Indicators
│   ├── Security certifications
│   ├── Provincial compliance badges
│   ├── User testimonials
│   └── Professional partnerships
├── Feature Overview
│   ├── Smart Intake Process
│   ├── Personalized Checklists
│   ├── Province-Specific Guidance
│   └── Professional Support
└── Footer
    ├── Legal information
    ├── Privacy policy
    ├── Contact information
    └── Provincial compliance details
```

#### Mobile Layout (320px - 768px)

```
Mobile Header (Hamburger + Logo + CTA)
├── Hero Section (Simplified)
│   ├── Focused Headline
│   ├── Single Primary CTA
│   └── Trust indicator
├── Persona Selection (Vertical Stack)
│   ├── Primary option emphasized
│   ├── Clear visual hierarchy
│   └── Easy touch targets
├── Key Benefits (3 max)
├── Social Proof (Testimonials)
└── Simple Footer
```

### Dashboard Layout

#### Main Dashboard Components

```
Dashboard Container
├── Header Bar
│   ├── Logo + Navigation
│   ├── User Profile
│   ├── Notifications
│   └── Help/Support
├── Progress Overview Card
│   ├── Overall completion percentage
│   ├── Current phase indicator
│   ├── Next recommended actions
│   └── Motivational messaging
├── Quick Actions Section
│   ├── Continue where I left off
│   ├── Upload a document
│   ├── Contact professional
│   └── View full checklist
├── Recent Activity Feed
│   ├── Completed tasks
│   ├── Saved documents
│   ├── System updates
│   └── Upcoming deadlines
├── Task Categories (Collapsible)
│   ├── Urgent (Red indicator)
│   ├── This Week (Orange)
│   ├── This Month (Yellow)
│   └── Future (Green)
└── Support Resources
    ├── Provincial information
    ├── Professional referrals
    ├── Community support
    └── Educational content
```

### Smart Intake Wizard Layout

#### Wizard Structure

```
Intake Wizard Container
├── Progress Header
│   ├── Step indicator (e.g., "3 of 15")
│   ├── Category name
│   ├── Time estimate
│   └── Save & Exit option
├── Question Section
│   ├── Question title
│   ├── Context explanation ("Why we ask")
│   ├── Input field(s)
│   ├── Help text/examples
│   └── Validation messages
├── Navigation Controls
│   ├── Back button
│   ├── Save & Continue Later
│   ├── Next/Continue
│   └── Skip This Section
└── Side Panel (Desktop only)
    ├── Overall progress
    ├── Quick help
    ├── Contact support
    └── Save reminder
```

#### Question Types & Layouts

##### Single Choice Question

```html
<div class="question-container">
  <h2>What is your relationship to the deceased?</h2>
  <p class="context">
    This helps us provide the right guidance for your situation.
  </p>

  <div class="radio-group">
    <label class="radio-option">
      <input type="radio" name="relationship" value="spouse" />
      <span class="radio-custom"></span>
      <span class="option-text">Spouse or partner</span>
    </label>
    <label class="radio-option">
      <input type="radio" name="relationship" value="child" />
      <span class="radio-custom"></span>
      <span class="option-text">Child</span>
    </label>
    <label class="radio-option">
      <input type="radio" name="relationship" value="executor" />
      <span class="radio-custom"></span>
      <span class="option-text">Appointed executor</span>
    </label>
  </div>

  <details class="help-detail">
    <summary>What if I'm not sure about my role?</summary>
    <p>
      If you're unsure about your legal role, that's completely normal. We can
      help you figure this out as we go.
    </p>
  </details>
</div>
```

##### Multiple Choice Question

```html
<div class="question-container">
  <h2>Which of these apply to the deceased's situation?</h2>
  <p class="context">
    Select all that apply - you can always change these later.
  </p>

  <div class="checkbox-group">
    <label class="checkbox-option">
      <input type="checkbox" name="situation" value="will_exists" />
      <span class="checkbox-custom"></span>
      <span class="option-text">There is a will</span>
    </label>
    <label class="checkbox-option">
      <input type="checkbox" name="situation" value="property_owner" />
      <span class="checkbox-custom"></span>
      <span class="option-text">Owned property</span>
    </label>
    <label class="checkbox-option">
      <input type="checkbox" name="situation" value="business_owner" />
      <span class="checkbox-custom"></span>
      <span class="option-text">Owned a business</span>
    </label>
    <label class="checkbox-option">
      <input type="checkbox" name="situation" value="none_of_above" />
      <span class="checkbox-custom"></span>
      <span class="option-text">None of these apply</span>
    </label>
  </div>
</div>
```

##### Text Input Question

```html
<div class="question-container">
  <h2>What province or territory did the death occur in?</h2>
  <p class="context">
    This determines which legal procedures we'll guide you through.
  </p>

  <div class="input-group">
    <label for="province" class="input-label">Province or Territory</label>
    <select id="province" name="province" class="form-input" required>
      <option value="">Select a province or territory</option>
      <option value="AB">Alberta</option>
      <option value="BC">British Columbia</option>
      <option value="MB">Manitoba</option>
      <!-- ... all provinces -->
    </select>
  </div>

  <div class="conditional-field" data-show-if="province=QC">
    <label for="language" class="input-label"
      >Preferred language for Quebec forms</label
    >
    <div class="radio-group">
      <label class="radio-option">
        <input type="radio" name="language" value="french" />
        <span class="radio-custom"></span>
        <span class="option-text">French</span>
      </label>
      <label class="radio-option">
        <input type="radio" name="language" value="english" />
        <span class="radio-custom"></span>
        <span class="option-text">English</span>
      </label>
    </div>
  </div>
</div>
```

### Checklist & Task Management Layout

#### Main Checklist View

```
Checklist Container
├── Header Section
│   ├── Completion overview
│   ├── Last updated date
│   ├── Export options
│   └── Share controls
├── Filter & Sort Controls
│   ├── Show: All/Urgent/Completed
│   ├── Sort by: Priority/Category/Date
│   ├── Search tasks
│   └── Province filter
├── Task Categories (Expandable)
│   ├── Category Header
│   │   ├── Category name & icon
│   │   ├── Completion count
│   │   ├── Expand/collapse control
│   │   └── Category help
│   ├── Task List
│   │   ├── Task Item
│   │   │   ├── Checkbox
│   │   │   ├── Task title
│   │   │   ├── Priority indicator
│   │   │   ├── Due date
│   │   │   ├── Province badge
│   │   │   └── Action menu
│   │   └── ... more tasks
│   └── Category completion celebration
└── Action Panel
    ├── Mark multiple complete
    ├── Get professional help
    ├── Export section
    └── Share progress
```

#### Task Detail Modal/Page

```
Task Detail Container
├── Task Header
│   ├── Task title
│   ├── Category & priority
│   ├── Province-specific badge
│   ├── Due date info
│   └── Close/Back button
├── Description Section
│   ├── What you need to do
│   ├── Why this is important
│   ├── When to complete by
│   └── Difficulty level
├── Step-by-Step Instructions
│   ├── Numbered steps
│   ├── Required documents
│   ├── Forms needed
│   └── Contact information
├── Resources & Links
│   ├── Official forms
│   ├── Government websites
│   ├── Contact numbers
│   └── Local offices
├── Professional Help
│   ├── "Get help with this"
│   ├── Recommended professionals
│   ├── Cost estimates
│   └── Booking options
└── Task Actions
    ├── Mark as complete
    ├── Skip for now
    ├── Get reminder
    └── Share with family
```

---

## Component Specifications

### React Component Architecture

#### Base Component Structure

All components follow a consistent trauma-informed pattern:

```tsx
// Base component interface
interface TraumaInformedComponentProps {
  // Emotional context
  emotionalState?: "crisis" | "stable" | "planning";
  supportLevel?: "minimal" | "guided" | "full";

  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;

  // Trauma-informed behavior
  allowSkip?: boolean;
  saveProgress?: boolean;
  gentleValidation?: boolean;

  // Standard props
  className?: string;
  children?: React.ReactNode;
}
```

#### Smart Intake Wizard Components

##### WizardContainer Component

```tsx
interface WizardContainerProps extends TraumaInformedComponentProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  onSave: () => Promise<void>;
  onExit: () => void;
  allowBackNavigation?: boolean;
  showProgress?: boolean;
}

const WizardContainer: React.FC<WizardContainerProps> = ({
  currentStep,
  totalSteps,
  emotionalState = "stable",
  onStepChange,
  onSave,
  onExit,
  children,
}) => {
  return (
    <div className={`wizard-container wizard-${emotionalState}`}>
      <WizardHeader
        step={currentStep}
        totalSteps={totalSteps}
        onExit={onExit}
        emotionalState={emotionalState}
      />
      <main className="wizard-content">{children}</main>
      <WizardNavigation
        onPrevious={() => onStepChange(currentStep - 1)}
        onNext={() => onStepChange(currentStep + 1)}
        onSave={onSave}
        canGoBack={currentStep > 1}
        emotionalState={emotionalState}
      />
    </div>
  );
};
```

##### QuestionCard Component

```tsx
interface QuestionCardProps extends TraumaInformedComponentProps {
  question: {
    id: string;
    title: string;
    description?: string;
    type: "single" | "multiple" | "text" | "number" | "date";
    required: boolean;
    options?: Array<{ label: string; value: string }>;
    validation?: ValidationRule[];
    helpText?: string;
  };
  value: any;
  onChange: (value: any) => void;
  onValidation: (isValid: boolean, message?: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  value,
  onChange,
  onValidation,
  emotionalState = "stable",
  gentleValidation = true,
}) => {
  const [validationMessage, setValidationMessage] = useState<string>("");

  const handleValidation = (newValue: any) => {
    if (!question.required && !newValue) {
      onValidation(true);
      return;
    }

    // Gentle validation logic
    const isValid = validateInput(newValue, question.validation);
    if (!isValid && gentleValidation) {
      setValidationMessage(
        "We'd love to have this information when you're ready",
      );
    } else if (!isValid) {
      setValidationMessage("This information is needed to continue");
    } else {
      setValidationMessage("");
    }
    onValidation(isValid, validationMessage);
  };

  return (
    <div className="question-card">
      <QuestionHeader
        title={question.title}
        description={question.description}
        required={question.required}
        emotionalState={emotionalState}
      />

      <QuestionInput
        type={question.type}
        options={question.options}
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
          handleValidation(newValue);
        }}
        validationMessage={validationMessage}
        emotionalState={emotionalState}
      />

      {question.helpText && <QuestionHelp text={question.helpText} />}
    </div>
  );
};
```

#### Task Management Components

##### TaskCard Component

```tsx
interface TaskCardProps extends TraumaInformedComponentProps {
  task: {
    id: string;
    title: string;
    description: string;
    category: string;
    priority: "urgent" | "high" | "normal" | "low";
    dueDate?: Date;
    province: string;
    completed: boolean;
    difficulty: "easy" | "medium" | "complex";
  };
  onComplete: (taskId: string) => void;
  onGetHelp: (taskId: string) => void;
  onViewDetails: (taskId: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onComplete,
  onGetHelp,
  onViewDetails,
  emotionalState = "stable",
}) => {
  return (
    <div
      className={`task-card task-${task.priority} ${task.completed ? "completed" : ""}`}
    >
      <div className="task-header">
        <Checkbox
          checked={task.completed}
          onChange={() => onComplete(task.id)}
          label={task.title}
          size="large"
          emotionalState={emotionalState}
        />
        <div className="task-meta">
          <PriorityBadge priority={task.priority} />
          <ProvinceBadge province={task.province} />
          {task.dueDate && <DueDateBadge date={task.dueDate} />}
        </div>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-actions">
        <Button
          variant="secondary"
          onClick={() => onViewDetails(task.id)}
          size="small"
        >
          View Details
        </Button>
        <Button
          variant="gentle"
          onClick={() => onGetHelp(task.id)}
          size="small"
        >
          Get Help
        </Button>
      </div>

      {task.difficulty === "complex" && (
        <div className="complexity-note">
          <Icon name="info" />
          <span>This task may benefit from professional assistance</span>
        </div>
      )}
    </div>
  );
};
```

#### Form Components with Trauma-Informed Design

##### Button Components

```tsx
interface ButtonProps extends TraumaInformedComponentProps {
  variant: "primary" | "secondary" | "gentle" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size = "medium",
  loading = false,
  disabled = false,
  onClick,
  children,
  emotionalState = "stable",
  ariaLabel,
  className = "",
}) => {
  const buttonClass = `
    btn 
    btn-${variant} 
    btn-${size} 
    ${emotionalState === "crisis" ? "btn-crisis" : ""}
    ${loading ? "btn-loading" : ""}
    ${disabled ? "btn-disabled" : ""}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      type="button"
    >
      {loading && <LoadingSpinner size="small" />}
      <span className={loading ? "sr-only" : ""}>{children}</span>
    </button>
  );
};
```

##### Input Components

```tsx
interface InputProps extends TraumaInformedComponentProps {
  type: "text" | "email" | "tel" | "number" | "date";
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule[];
  helpText?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  helpText,
  errorMessage,
  gentleValidation = true,
  emotionalState = "stable",
  ariaLabel,
  ariaDescribedBy,
}) => {
  const inputId = useId();
  const helpId = `${inputId}-help`;
  const errorId = `${inputId}-error`;

  const hasError = Boolean(errorMessage);
  const showGentleError = hasError && gentleValidation;

  return (
    <div className={`input-group ${hasError ? "input-error" : ""}`}>
      <label
        htmlFor={inputId}
        className={`input-label ${required ? "required" : ""}`}
      >
        {label}
        {!required && <span className="optional-text"> (optional)</span>}
      </label>

      {helpText && (
        <p id={helpId} className="input-help">
          {helpText}
        </p>
      )}

      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`form-input ${hasError ? "error" : ""}`}
        aria-label={ariaLabel}
        aria-describedby={`${helpId} ${hasError ? errorId : ""}`}
        aria-invalid={hasError}
        required={required}
      />

      {hasError && (
        <p
          id={errorId}
          className={`input-error-message ${showGentleError ? "gentle" : ""}`}
        >
          <Icon name={showGentleError ? "info" : "alert"} />
          {showGentleError
            ? `We'd appreciate this information: ${errorMessage}`
            : errorMessage}
        </p>
      )}
    </div>
  );
};
```

---

## Accessibility Guidelines

### WCAG 2.2 AA Compliance Framework

#### Level A Requirements (Baseline)

1. **Non-text Content**: All images have meaningful alt text
2. **Keyboard Navigation**: All functionality accessible via keyboard
3. **Color Usage**: Color is not the only means of conveying information
4. **Text Scaling**: Content readable when zoomed to 200%
5. **Focus Indicators**: Visible focus indicators on all interactive elements

#### Level AA Requirements (Target Standard)

1. **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
2. **Resize Text**: Content functional when text is resized up to 200%
3. **Keyboard Trap**: No keyboard traps in any component
4. **Page Titles**: Unique, descriptive page titles for all pages
5. **Headings Structure**: Proper heading hierarchy (h1 → h2 → h3)

### Grief-Sensitive Accessibility Considerations

#### Cognitive Load Reduction

```css
/* Reduced motion for sensitive users */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast support */
@media (prefers-contrast: high) {
  .btn-primary {
    background: #000;
    color: #fff;
    border: 2px solid #fff;
  }

  .form-input {
    border: 2px solid #000;
  }
}

/* Forced colors support (Windows high contrast mode) */
@media (forced-colors: active) {
  .card {
    border: 1px solid ButtonText;
  }

  .btn-primary {
    border: 1px solid ButtonText;
  }
}
```

#### Screen Reader Support

```html
<!-- Progress indication for screen readers -->
<div
  role="progressbar"
  aria-valuenow="3"
  aria-valuemin="1"
  aria-valuemax="15"
  aria-label="Question 3 of 15 in the intake process"
>
  <span class="sr-only">Step 3 of 15: Family Information</span>
</div>

<!-- Status updates for task completion -->
<div role="status" aria-live="polite" aria-atomic="true">
  <span class="sr-only">Task completed: Order death certificate</span>
</div>

<!-- Error messages linked to inputs -->
<input aria-describedby="email-error email-help" />
<div id="email-error" role="alert" aria-live="assertive">
  Please enter a valid email address
</div>
```

#### Keyboard Navigation Patterns

```typescript
// Custom hook for keyboard navigation in wizards
const useWizardKeyboard = (
  currentStep: number,
  totalSteps: number,
  onNext: () => void,
  onPrevious: () => void,
  onSave: () => void,
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Allow Ctrl+S to save progress
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        onSave();
        return;
      }

      // Allow Ctrl+Right to go to next step
      if (
        event.ctrlKey &&
        event.key === "ArrowRight" &&
        currentStep < totalSteps
      ) {
        event.preventDefault();
        onNext();
        return;
      }

      // Allow Ctrl+Left to go to previous step
      if (event.ctrlKey && event.key === "ArrowLeft" && currentStep > 1) {
        event.preventDefault();
        onPrevious();
        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, totalSteps, onNext, onPrevious, onSave]);
};
```

#### Focus Management

```typescript
// Focus management for modal dialogs and route changes
const FocusManager: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const focusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the main content area when component mounts
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={focusRef}
      tabIndex={-1}
      className="focus-container"
      aria-label="Main content"
    >
      {children}
    </div>
  );
};
```

### Testing Protocols

#### Automated Testing

```javascript
// Jest + Testing Library accessibility tests
describe("Accessibility Tests", () => {
  test("form inputs have proper labels", async () => {
    render(<IntakeWizard step={1} />);

    const nameInput = screen.getByRole("textbox", { name: /your name/i });
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAccessibleName();
  });

  test("buttons have adequate contrast", async () => {
    render(<Button variant="primary">Continue</Button>);

    const button = screen.getByRole("button", { name: /continue/i });
    const styles = getComputedStyle(button);

    // Test would verify contrast ratio meets 4.5:1 minimum
    expect(
      getContrastRatio(styles.backgroundColor, styles.color),
    ).toBeGreaterThanOrEqual(4.5);
  });

  test("keyboard navigation works", async () => {
    const user = userEvent.setup();
    render(<TaskList tasks={mockTasks} />);

    // Tab through all focusable elements
    await user.tab();
    expect(screen.getByRole("checkbox", { name: /first task/i })).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("button", { name: /view details/i })).toHaveFocus();
  });
});
```

#### Manual Testing Checklist

- [ ] Navigate entire application using only keyboard
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify color contrast meets WCAG AA standards
- [ ] Test with Windows High Contrast mode
- [ ] Verify content readable at 200% zoom
- [ ] Test with reduced motion preferences
- [ ] Validate proper heading hierarchy
- [ ] Confirm meaningful focus indicators
- [ ] Test form error announcements
- [ ] Verify skip links functionality

---

## Province-Specific UX Considerations

### Localization Strategy

#### Quebec-Specific Requirements

```typescript
interface LocalizationConfig {
  province: ProvinceCode;
  language: "en" | "fr";
  legalTerminology: Record<string, string>;
  formRequirements: FormRequirement[];
  governmentLinks: GovernmentLink[];
}

const quebecConfig: LocalizationConfig = {
  province: "QC",
  language: "fr", // Default to French for Quebec
  legalTerminology: {
    death_certificate: "acte de décès",
    probate: "homologation",
    executor: "exécuteur testamentaire",
    will: "testament",
  },
  formRequirements: [
    {
      name: "Déclaration de succession",
      required: true,
      deadline: "6 months",
      authority: "Revenu Québec",
    },
  ],
  governmentLinks: [
    {
      name: "Directeur de l'état civil",
      url: "https://www.etatcivil.gouv.qc.ca/",
      purpose: "death_registration",
    },
  ],
};
```

#### Province-Specific UI Components

```tsx
const ProvinceIndicator: React.FC<{ province: ProvinceCode }> = ({
  province,
}) => {
  const provincialInfo = getProvincialInfo(province);

  return (
    <div className="province-indicator">
      <img
        src={`/images/provinces/${province.toLowerCase()}.svg`}
        alt={`${provincialInfo.name} flag`}
        className="province-flag"
      />
      <div className="province-details">
        <h3>{provincialInfo.name}</h3>
        <p>Legal processes for {provincialInfo.name}</p>
      </div>
    </div>
  );
};

const ProvincialTaskCard: React.FC<{
  task: Task;
  province: ProvinceCode;
}> = ({ task, province }) => {
  const provincialVariant = task.provincialVariants?.[province];

  return (
    <TaskCard {...task}>
      {provincialVariant && (
        <div className="provincial-note">
          <ProvinceIndicator province={province} />
          <p>{provincialVariant.description}</p>
          {provincialVariant.specialRequirements && (
            <ul>
              {provincialVariant.specialRequirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </TaskCard>
  );
};
```

### Content Adaptation Patterns

#### Legal Terminology Adaptation

```typescript
// Legal term resolver for different provinces
const legalTermResolver = {
  death_certificate: {
    default: "Death Certificate",
    QC: "Acte de décès",
    BC: "Medical Certificate of Death",
    ON: "Death Certificate",
  },
  probate_court: {
    default: "Probate Court",
    BC: "Supreme Court of British Columbia",
    ON: "Superior Court of Justice",
    QC: "Cour supérieure du Québec",
    AB: "Court of King's Bench of Alberta",
  },
};

const getTermForProvince = (term: string, province: ProvinceCode): string => {
  return (
    legalTermResolver[term]?.[province] ||
    legalTermResolver[term]?.["default"] ||
    term
  );
};
```

#### Form Requirements by Province

```typescript
interface ProvincialForm {
  name: string;
  description: string;
  required: boolean;
  deadline?: string;
  url?: string;
  notes?: string;
}

const probateRequirements: Record<ProvinceCode, ProvincialForm[]> = {
  ON: [
    {
      name: "Application for Certificate of Appointment of Estate Trustee",
      description: "Required when estate value exceeds $50,000",
      required: true,
      deadline: "No statutory deadline, but recommended within 1 year",
      url: "https://www.ontario.ca/page/applying-certificate-appointment-estate-trustee",
    },
  ],
  BC: [
    {
      name: "Probate Application",
      description: "Required when estate value exceeds $25,000",
      required: true,
      deadline: "No statutory deadline",
      url: "https://www2.gov.bc.ca/gov/content/life-events/death/probate-estate-administration",
    },
  ],
  QC: [
    {
      name: "Demande de vérification de testament",
      description: "Requis pour les testaments olographes ou devant témoins",
      required: true,
      deadline: "Aucune limite de temps statutaire",
      url: "https://www.justice.gouv.qc.ca/",
    },
  ],
};
```

### Multi-Provincial Support

#### Provincial Content Switching

```tsx
const ProvincialContentProvider: React.FC<{
  children: React.ReactNode;
  province: ProvinceCode;
}> = ({ children, province }) => {
  const [provincialContent, setProvincialContent] =
    useState<ProvincialContent | null>(null);

  useEffect(() => {
    // Load provincial content configuration
    loadProvincialContent(province).then(setProvincialContent);
  }, [province]);

  if (!provincialContent) {
    return <ContentLoadingSpinner />;
  }

  return (
    <ProvincialContext.Provider value={provincialContent}>
      {children}
    </ProvincialContext.Provider>
  );
};

// Usage in components
const TaskListContainer: React.FC = () => {
  const provincialContent = useProvincialContent();
  const { province } = useUser();

  return (
    <div className="task-list">
      <ProvincialHeader province={province} />
      {provincialContent.taskCategories.map((category) => (
        <TaskCategory
          key={category.id}
          category={category}
          province={province}
        />
      ))}
    </div>
  );
};
```

---

## Technical UX Requirements

### Performance Requirements for Trauma-Informed UX

#### Page Load Performance

```typescript
// Performance targets for trauma-informed experience
const performanceTargets = {
  // Critical emotional states require faster response
  crisis_mode: {
    first_contentful_paint: 1000, // 1 second max
    largest_contentful_paint: 1500, // 1.5 seconds max
    cumulative_layout_shift: 0.05, // Minimal layout shift
    first_input_delay: 50, // Immediate responsiveness
  },
  stable_mode: {
    first_contentful_paint: 1500,
    largest_contentful_paint: 2000,
    cumulative_layout_shift: 0.1,
    first_input_delay: 100,
  },
};
```

#### Progressive Enhancement Strategy

```javascript
// Ensure core functionality works without JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Enhance forms with JavaScript if available
  const forms = document.querySelectorAll(".intake-form");

  forms.forEach((form) => {
    // Add auto-save functionality
    enableAutoSave(form);

    // Add real-time validation
    enableGentleValidation(form);

    // Add progress persistence
    enableProgressSaving(form);
  });
});

// Auto-save implementation for trauma-informed experience
const enableAutoSave = (form) => {
  let saveTimeout;

  form.addEventListener("input", (event) => {
    clearTimeout(saveTimeout);

    // Debounce saves to avoid overwhelming stressed users
    saveTimeout = setTimeout(() => {
      saveFormProgress(form);
      showSaveIndicator("Your progress is saved automatically");
    }, 2000);
  });
};
```

### State Management for Emotional Context

#### Emotional State Context

```typescript
interface EmotionalState {
  current: "crisis" | "overwhelmed" | "stable" | "planning";
  confidence: number; // 0-100 scale
  lastUpdated: Date;
  triggers: string[]; // What caused state changes
}

interface UserContext {
  profile: UserProfile;
  emotional: EmotionalState;
  progress: ProgressState;
  preferences: UserPreferences;
}

const useEmotionalState = () => {
  const [state, setState] = useState<EmotionalState>({
    current: "stable",
    confidence: 50,
    lastUpdated: new Date(),
    triggers: [],
  });

  const updateEmotionalState = (
    newState: EmotionalState["current"],
    trigger?: string,
  ) => {
    setState((prev) => ({
      ...prev,
      current: newState,
      lastUpdated: new Date(),
      triggers: trigger ? [...prev.triggers.slice(-4), trigger] : prev.triggers,
    }));
  };

  // Adjust UI based on emotional state
  useEffect(() => {
    document.body.className = `emotional-state-${state.current}`;
  }, [state.current]);

  return { state, updateEmotionalState };
};
```

#### Progress Persistence Strategy

```typescript
interface ProgressState {
  currentSection: string;
  completedSections: string[];
  skippedQuestions: string[];
  lastSaved: Date;
  autoSaveEnabled: boolean;
}

const useProgressPersistence = () => {
  const saveProgress = async (progress: Partial<ProgressState>) => {
    try {
      // Save to localStorage first (immediate)
      localStorage.setItem("aftermatters_progress", JSON.stringify(progress));

      // Then sync to server (background)
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(progress),
      });

      showSaveIndicator("Progress saved");
    } catch (error) {
      // Graceful degradation - keep local save
      console.warn("Could not sync progress to server:", error);
      showSaveIndicator("Progress saved locally");
    }
  };

  const loadProgress = async (): Promise<ProgressState | null> => {
    try {
      // Try server first
      const response = await fetch("/api/progress");
      if (response.ok) {
        return response.json();
      }
    } catch (error) {
      console.warn("Could not load progress from server:", error);
    }

    // Fallback to localStorage
    const localProgress = localStorage.getItem("aftermatters_progress");
    return localProgress ? JSON.parse(localProgress) : null;
  };

  return { saveProgress, loadProgress };
};
```

### Responsive Design Strategy

#### Breakpoint System

```scss
// Trauma-informed responsive design
$breakpoints: (
  "mobile-s": 320px,
  // Small mobile (iPhone SE)
  "mobile-m": 375px,
  // Medium mobile (iPhone 6/7/8)
  "mobile-l": 425px,
  // Large mobile (iPhone 6/7/8 Plus)
  "tablet": 768px,
  // iPad
  "laptop": 1024px,
  // Small laptop
  "laptop-l": 1440px,
  // Large laptop
  "desktop": 2560px, // Desktop
);

// Mobile-first approach with emotional context
.wizard-container {
  padding: 1rem;

  @include respond-to("tablet") {
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  @include respond-to("laptop") {
    max-width: 800px;
  }

  // Crisis mode needs larger touch targets
  &.emotional-state-crisis {
    .btn {
      min-height: 56px; // Larger than standard 44px
      font-size: 1.125rem;

      @include respond-to("mobile-s") {
        min-height: 64px; // Even larger on small screens
      }
    }

    .form-input {
      min-height: 56px;
      font-size: 1.125rem;
    }
  }
}
```

#### Touch-Friendly Design

```scss
// Touch target guidelines for stressed users
.touch-friendly {
  // Minimum 44px touch targets (WCAG)
  // But larger for emotional stress situations
  .btn,
  .checkbox,
  .radio,
  .form-input {
    min-height: 44px;
    min-width: 44px;

    @media (pointer: coarse) {
      // Larger targets for touch devices
      min-height: 48px;
      min-width: 48px;
    }
  }

  // Extra spacing for crisis users
  &.crisis-mode {
    .btn,
    .checkbox,
    .radio,
    .form-input {
      min-height: 56px;
      min-width: 56px;
    }

    // More spacing between interactive elements
    .form-group + .form-group {
      margin-top: 2rem;
    }

    .btn + .btn {
      margin-left: 1.5rem;
    }
  }
}
```

### Error Handling & Recovery

#### Graceful Error Recovery

```typescript
interface ErrorState {
  type: "network" | "validation" | "server" | "unknown";
  message: string;
  recoverable: boolean;
  emotionalContext: "crisis" | "stable";
}

const useGracefulErrorHandling = () => {
  const [errors, setErrors] = useState<ErrorState[]>([]);

  const handleError = (error: Error, context: any) => {
    const errorState: ErrorState = {
      type: classifyError(error),
      message: getTraumaInformedMessage(error, context.emotionalState),
      recoverable: isRecoverable(error),
      emotionalContext: context.emotionalState,
    };

    setErrors((prev) => [...prev, errorState]);

    // Auto-dismiss non-critical errors for crisis users
    if (context.emotionalState === "crisis" && errorState.recoverable) {
      setTimeout(() => {
        setErrors((prev) => prev.filter((e) => e !== errorState));
      }, 5000);
    }
  };

  const getTraumaInformedMessage = (error: Error, emotionalState: string) => {
    if (emotionalState === "crisis") {
      return "We're having a small technical issue, but your information is safe. You can continue or try again in a moment.";
    }

    return `Something went wrong: ${error.message}. We're here to help if you need it.`;
  };

  return { errors, handleError };
};
```

#### Offline Support Strategy

```typescript
// Service worker for offline functionality
const offlineStrategy = {
  // Cache critical pages
  precachePages: ["/dashboard", "/intake/step-1", "/checklist", "/help"],

  // Cache form data locally
  cacheFormData: true,

  // Sync when back online
  backgroundSync: true,

  // Offline indicators
  showOfflineStatus: true,
};

// React hook for offline support
const useOfflineSupport = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [queuedActions, setQueuedActions] = useState<Action[]>([]);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      // Sync queued actions
      syncQueuedActions();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { isOnline, queuedActions };
};
```

---

## Implementation Roadmap

### Phase 0 Implementation Plan (Weeks 1-4)

#### Week 1: Foundation Setup

- [ ] Set up design system in Figma
- [ ] Create component library structure
- [ ] Define color palette and typography
- [ ] Establish accessibility testing framework
- [ ] Create trauma-informed design guidelines document

#### Week 2: User Research & Validation

- [ ] Conduct user interviews with bereaved individuals
- [ ] Test persona accuracy with real users
- [ ] Validate user journey maps
- [ ] Test design system with accessibility users
- [ ] Gather feedback from estate professionals

#### Week 3: Prototype Development

- [ ] Create high-fidelity mockups for key pages
- [ ] Build interactive prototype in Figma
- [ ] Implement design tokens in CSS
- [ ] Create React component starters
- [ ] Test responsive design across devices

#### Week 4: Testing & Refinement

- [ ] Conduct usability testing sessions
- [ ] Test with screen readers
- [ ] Validate trauma-informed design patterns
- [ ] Refine based on feedback
- [ ] Document final design specifications

### Success Metrics for Phase 0

#### User Experience Metrics

- **Task Completion Rate**: >85% for intake wizard
- **Error Recovery Rate**: >90% for form validation
- **User Satisfaction**: >4.0/5.0 average rating
- **Accessibility Score**: 100% WCAG 2.2 AA compliance

#### Emotional Impact Metrics

- **Stress Level**: <3.0/5.0 reported stress during use
- **Confidence Level**: >4.0/5.0 confidence in process
- **Support Perception**: >4.0/5.0 feeling supported
- **Completion Without Help**: >70% complete without external assistance

#### Technical Performance Metrics

- **First Contentful Paint**: <1.5 seconds
- **Largest Contentful Paint**: <2.0 seconds
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <2.5 seconds

---

## Conclusion

This UX design document establishes the foundation for creating a trauma-informed, accessible, and legally compliant estate settlement platform. The design system prioritizes emotional safety while maintaining functionality across all 13 Canadian provinces.

Key achievements of this design:

1. **Trauma-Informed Approach**: Every design decision considers the emotional state of grieving users
2. **Accessibility First**: WCAG 2.2 AA compliance with additional considerations for cognitive load
3. **Provincial Compliance**: Seamless handling of jurisdiction-specific requirements
4. **Progressive Enhancement**: Core functionality works for all users regardless of technical capability
5. **Scalable Architecture**: Component system designed to grow with the platform

The design system provides clear guidance for the development team while ensuring consistency in the user experience. Regular testing and iteration based on real user feedback will be essential for maintaining the trauma-informed approach throughout the platform's evolution.

This foundation enables the development team to proceed with Phase 1 implementation while maintaining focus on the users' emotional and practical needs during one of life's most challenging transitions.

---

_This document serves as the comprehensive UX foundation for the AfterMatters platform and should be referenced throughout all development phases to ensure consistency with trauma-informed design principles._
