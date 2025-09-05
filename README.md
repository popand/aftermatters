# AfterMatters

> Canada's first comprehensive digital platform for end-of-life planning and post-death administration

AfterMatters combines AI-driven personalization with province-specific legal compliance to guide Canadian families through estate settlement processes with compassion and intelligence.

## Project Status

🚧 **Currently in Development - Phase 0: UX Foundation & Design System**

This project is in the early design and specification phase. We are currently establishing trauma-informed design principles, user personas, and the complete design system before technical development begins.

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

## Development Setup

**Note**: Full development environment setup will be available after Phase 0 completion.

Currently available scripts:
```bash
npm run lint      # Code linting
npm run format    # Code formatting  
npm run typecheck # TypeScript validation
npm run test      # Run tests
npm run build     # Build project
```

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

## Contributing

This project is currently in the specification and design phase. Development contributions will be welcomed once the technical implementation begins in Phase 1.

### Code Quality
- Comprehensive TypeScript coverage
- Trauma-informed UX principles
- WCAG 2.1 AA accessibility compliance
- Province-specific legal accuracy

## Security & Compliance

- Bank-level encryption (AES-256)
- PIPEDA compliance for Canadian privacy laws
- Multi-factor authentication
- Audit logging for all document access
- Canadian data residency requirements

## License

[License details to be determined]

## Support

For questions about this project:
- Technical documentation: See project specification files
- Business inquiries: [Contact information to be added]

---

**Status**: Phase 0 - UX Foundation & Design System  
**Next Milestone**: Complete trauma-informed design system and user personas  
**Estimated Phase 1 Start**: After UX foundation completion

*Built with ❤️ for Canadian families navigating life's most challenging administrative tasks*