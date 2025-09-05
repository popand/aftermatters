# AfterMatters - MVP Clickable UI Prototype

> Canada's first comprehensive digital platform for end-of-life planning and post-death administration

This MVP prototype demonstrates AfterMatters' core functionality and trauma-informed design approach, suitable for client presentations and stakeholder demonstrations.

## ✨ MVP Prototype Features

This clickable prototype showcases:

- **Trauma-Informed Design**: Interface designed for users experiencing grief with progressive disclosure and emotional intelligence
- **Persona-Based Experience**: Tailored workflows for reactive (recently bereaved), proactive (planning ahead), and professional helper users
- **Smart Intake Wizard**: Multi-step questionnaire with conditional logic and gentle validation
- **Task Management**: Progress tracking with emotional state awareness
- **Responsive Design**: Mobile-first approach with accessibility compliance (WCAG 2.2 AA)
- **Province-Specific Content**: Supports Canadian provincial legal requirements

## Overview

AfterMatters addresses the complex challenge of estate planning and post-death administration in Canada by providing:

- **Smart Intake Engine**: Dynamic questionnaire system adapting to user circumstances
- **AI-Powered Checklists**: Personalized action items based on provincial requirements
- **Trauma-Informed Design**: Interface designed for users experiencing grief
- **Province-Specific Compliance**: Coverage for all 13 Canadian jurisdictions
- **Professional Integration**: White-label solutions for legal and financial advisors

## Architecture

```
Frontend (React/PWA) → API Gateway → Backend (Node.js/Express) → PostgreSQL Database
                                  ↓
                            AI/Logic Engine (Checklist Generation)
                                  ↓
                            Document Vault (Encrypted Storage)
```

## Technology Stack

- **Frontend**: React 18+ with TypeScript
- **UI Components**: shadcn/ui with Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Security**: AES-256 encryption, JWT authentication
- **Development**: Vite, ESLint, Prettier, Jest

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Modern web browser

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui base components
│   ├── forms/          # Form-specific components
│   └── layout/         # Layout components
├── pages/              # Page components
├── data/               # Mock data and personas
├── lib/                # Utilities and helpers
├── styles/             # CSS and design tokens
└── types/              # TypeScript type definitions
```

## 🎨 Design System Features

### Trauma-Informed Design Tokens

The prototype implements a comprehensive design system focused on emotional states:

- **Crisis Mode**: Larger touch targets, simplified interfaces, supportive messaging
- **Stable Mode**: Standard interface optimized for clarity and efficiency
- **Planning Mode**: Future-focused language with preparatory guidance

### Core Pages

1. **Landing Page** (`/`) - Persona selection with empathetic messaging
2. **Dashboard** (`/dashboard`) - Progress tracking and quick actions
3. **Intake Wizard** (`/intake`) - Multi-step questionnaire with auto-save
4. **Tasks** (`/tasks`) - Task management with completion tracking

### Custom Color Palette

- Primary colors: `#4A90A4` (primary blue), `#7BA05B` (secondary green)
- Emotional state colors: gentle success, supportive error, information blue
- Typography scales for different emotional states
- Touch-friendly spacing and sizing

## 🧠 Emotional State Management

The prototype adapts based on user emotional state:

- **Crisis**: Larger text, more padding, supportive messaging, simplified interactions
- **Stable**: Balanced interface with standard sizing and clear information hierarchy
- **Planning**: Future-focused language with comprehensive feature access

## ♿ Accessibility Features

- WCAG 2.2 AA compliance
- Keyboard navigation support
- Screen reader optimized
- High contrast color ratios
- Touch-friendly minimum sizes (44px+)
- Gentle animations with respect for motion preferences

## Development Phases

- **Phase 0** (Current): UX Foundation & Design System
- **Phase 1**: MVP - Smart Intake Engine + Basic Checklist Builder
- **Phase 2**: Document Vault + Professional Integration APIs
- **Phase 3**: Advanced AI features + Government API integrations
- **Phase 4**: Launch optimization + monitoring

## Key Features

### Smart Intake Engine

- 40+ questions across 15 categories
- Progressive disclosure (1-3 questions per step)
- Province-specific conditional logic
- Save/resume functionality

### AI-Powered Checklist Builder

- Personalized task generation
- 14 main categories with sub-tasks
- Province-specific legal compliance
- PDF export and email sharing

### Secure Document Vault

- AES-256 encrypted storage
- Role-based access control
- Time-locked document release
- Multi-format support

## Target Users

### Primary Personas

- **Proactive Planners**: Ages 50-75, preparing estate plans
- **Reactive Users**: Ages 30-60, recently bereaved managing affairs
- **Professional Users**: Lawyers, financial advisors, funeral directors

### Use Cases

- Estate planning and document organization
- Post-death notification to institutions
- Probate and legal process guidance
- Professional client support tools

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **shadcn/ui** components with Radix UI primitives
- **Tailwind CSS** with custom trauma-informed design tokens
- **Vite** for fast development and optimized builds
- **Lucide React** for accessible icons

## 📝 Development Notes

- All components are built with TypeScript for type safety
- shadcn/ui components are customized for trauma-informed interactions
- Mock data simulates real backend responses
- Responsive design tested across all device sizes
- Progressive disclosure patterns reduce cognitive load

## 🎯 Next Steps

This MVP prototype is designed for:

1. **Client presentations** and stakeholder demonstrations
2. **User testing** and feedback collection
3. **Foundation** for full development implementation
4. **Design system documentation** and standardization

## 📋 Development Phases

- **Phase 0** (Completed): MVP UI Prototype & Design System
- **Phase 1**: Smart Intake Engine + Basic Checklist Builder
- **Phase 2**: Document Vault + Professional Integration APIs
- **Phase 3**: Advanced AI features + Government API integrations
- **Phase 4**: Launch optimization + monitoring

## 🔐 Security & Compliance

- Bank-level encryption (AES-256) for production
- PIPEDA compliance for Canadian privacy laws
- Multi-factor authentication capabilities
- Audit logging for all document access
- Canadian data residency requirements

## 📄 License

This project is private and proprietary to AfterMatters.

---

**🏆 MVP Status**: Complete and ready for client presentations  
**🚀 Next Milestone**: Phase 1 technical implementation  
**💡 Purpose**: Demonstrate trauma-informed design approach and core functionality

_Built with ❤️ for Canadian families navigating life's most challenging administrative tasks_
