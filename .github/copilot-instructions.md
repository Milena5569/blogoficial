# Copilot Project Instructions
## VivaTDAH Blog Hub

This repository is an AI-assisted engineering environment.

All AI agents working in this repository must follow the architectural rules defined in this document.

This project is NOT a simple blog.

It is a **Content + Growth Platform for mental health education (TDAH / ADHD)**.

Because this project operates in a **YMYL domain (Your Money Your Life)**, the architecture must prioritize:

• Trust (E-E-A-T)  
• Data integrity  
• Security  
• Type safety  
• Accessibility  
• SEO correctness  
• Editorial governance  

Growth features must NEVER be implemented before these foundations are secure.

---

# Platform Architecture

The system is structured into interacting operational layers.

### Content OS
Editorial production and knowledge organization.

### Journey OS
Navigation across learning paths and topic clusters.

### Growth OS
Lead capture, CTAs and conversion flows.

### Data OS
Tracking, analytics and behavioral insight.

### Trust OS
YMYL credibility, authorship and moderation.

### Platform OS
Infrastructure, performance and deployment.

---

# Official Technology Stack

Backend CMS  
Payload CMS v3

Database  
MongoDB

Frontend  
Astro 5 (SSR)

Interactive Components  
React Islands

Styling  
Tailwind CSS + CSS Variables

Deployment  
Vercel

Type System  
TypeScript

---

# Source of Truth Rule

Payload CMS is the **single source of truth** for:

• posts  
• authors  
• editorial metadata  
• trust metadata  
• comments  
• likes  

External services must never become competing data sources.

---

# Forbidden Architecture Pattern

Supabase was previously used for client-side comments and likes.

This creates a **data silo**.

This architecture is forbidden.

All community interactions must follow:

Payload CMS → Astro API routes → Frontend.

---

# YMYL Trust Requirements

Because this platform operates in mental health education, every article must provide credibility signals.

Post schema must support:

• author  
• reviewer  
• reviewer credentials  
• references  
• last reviewed date  
• publication date  
• editorial status  

Comments must default to:

pending

Moderation is mandatory before publishing.

---

# Accessibility Contract

Accessibility must follow WCAG 2.2 principles.

Minimum requirements:

• semantic HTML  
• keyboard navigation  
• visible focus states  
• reduced motion support  
• accessible form labels  
• readable color contrast

---

# SEO Requirements

Article pages must include:

• canonical URLs  
• OpenGraph metadata  
• meta description  
• JSON-LD structured data  
• article schema  
• author schema  
• breadcrumb schema  

SEO must be generated dynamically.

---

# Performance Rules

Tracking scripts must never block rendering.

If third-party scripts are introduced they must use:

• Partytown  
or  
• deferred script strategy.

Core Web Vitals must not degrade.

---

# Type Safety

TypeScript is mandatory in critical layers.

Payload schema must generate:

payload-types.ts

Frontend CMS bridge must use these types.

JavaScript-only bridges are discouraged.

---

# AI Collaboration Protocol

When assisting this repository:

1. Always analyze existing files before proposing new ones.
2. Prefer refactoring existing architecture over creating parallel systems.
3. Avoid speculative subsystems.
4. Focus on roadmap priorities.
5. Keep code changes incremental and safe.

---

# Priority Roadmap (P0)

The following tasks must be completed before any advanced growth features.

1. Refactor Payload Posts schema  
   Tabs: Content, SEO, Journey, Conversion, Trust

2. Improve Authors schema  
   Credentials, expertise, role and biography

3. Generate payload-types.ts

4. Replace api.js with api.ts  
   Add typing, pagination and preview support

5. Sync Tailwind config with CSS variables

6. Create SEO component  
   SEO.astro

7. Create article layout  
   PostLayout.astro

8. Create dynamic article route  
   [slug].astro

9. Move comments and likes to Payload

10. Implement secure API routes  
    /api/comments  
    /api/likes

11. Remove Supabase integration

---

# Forbidden Practices

Never introduce:

• client-side database writes  
• unmoderated comments  
• parallel content databases  
• hardcoded CTAs per page  
• unstructured analytics scripts  
• TypeScript bypass using any

---

# Development Rule

Before proposing new changes always validate:

npm run build  
npm run lint  
npm run typecheck