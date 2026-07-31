# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio-content.spec.ts >> Portfolio Content >> should render the newly added projects and experiences
- Location: tests/portfolio-content.spec.ts:15:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Connected and stabilized Meta integrations (Messenger & Instagram)')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Connected and stabilized Meta integrations (Messenger & Instagram)')

```

```yaml
- banner:
  - navigation:
    - list:
      - listitem:
        - link "Home":
          - /url: "#home"
      - listitem:
        - link "About":
          - /url: "#about"
      - listitem:
        - link "Experience":
          - /url: "#experience"
      - listitem:
        - link "Skills":
          - /url: "#skills"
      - listitem:
        - link "Projects":
          - /url: "#projects"
      - listitem:
        - link "Contact":
          - /url: "#contact"
- main:
  - img "Yousef Eslam"
  - text: 👋
  - heading "Hello, I'm Yousef. I'm a Full-Stack Software Engineer. I build robust SaaS platforms, intelligent CRMs, and complex API integrations that drive real business impact." [level=1]
  - link "Contact me here":
    - /url: "#contact"
    - text: Contact me here
    - img
  - link:
    - /url: https://wa.me/+201005307391
    - img
  - link:
    - /url: https://www.linkedin.com/in/yousef-eslam-dev/
    - img
  - link:
    - /url: https://github.com/Yousefeslam214
    - img
  - heading "About me" [level=2]
  - article:
    - heading "Who I am" [level=3]
    - paragraph: I am a Full-Stack Software & AI Engineer with a deep passion for building intelligent SaaS platforms, scalable backend integrations, and AI-driven automation workflows that solve complex engineering challenges.
  - article:
    - heading "My Engineering Approach" [level=3]
    - paragraph: I believe that great software is built at the intersection of robust architecture and cutting-edge AI. My focus is on writing clean, maintainable code, architecting resilient CI/CD pipelines, and integrating Large Language Models (LLMs) securely into production environments.
  - article:
    - heading "What I Build" [level=3]
    - list:
      - listitem: "AI & RAG Systems: Intelligent document processing and semantic search pipelines using LangChain, Vector Databases, and OpenAI/Gemini."
      - listitem: "SaaS & Automation Nodes: Core API integrations, heavy-duty webhooks, and scalable infrastructure for low-code automation platforms."
      - listitem: "Full-Stack Applications: End-to-end web apps featuring React.js frontends, secure Node.js backends, and complex SQL/NoSQL databases."
      - listitem: "DevOps & Infrastructure: System health monitoring, dynamic billing architecture, and load-tested cloud deployments."
  - article:
    - heading "Tech Stack & Tools" [level=3]
    - paragraph: "Languages & Frameworks: TypeScript, Node.js, React.js, Next.js, Express.js AI Engineering: LangChain, RAG, Vector Embeddings, LLM Orchestration, Generative AI Databases & Infrastructure: PostgreSQL, MySQL, MongoDB, Webhooks, RESTful APIs, CI/CD"
  - heading "My experience" [level=2]
  - paragraph: For full experience details, visit my LinkedIn profile
  - link "View Full Experience":
    - /url: https://www.linkedin.com/in/yousef-eslam-dev/details/experience/
  - heading "My skills" [level=2]
  - paragraph: Technologies I use to build AI-powered automations and production-ready web applications.
  - article:
    - heading "AI & Automation" [level=3]
    - paragraph: Building intelligent agents and automated workflows.
    - list:
      - listitem: AI Agents
      - listitem: RAG Systems
      - listitem: LangChain
      - listitem: Workflow Automation
      - listitem: Webhooks
      - listitem: APIs
  - article:
    - heading "Frontend" [level=3]
    - paragraph: Crafting responsive and scalable interfaces.
    - list:
      - listitem: Next.js
      - listitem: React
      - listitem: TypeScript
      - listitem: JavaScript
      - listitem: Tailwind
      - listitem: Framer Motion
      - listitem: HTML
      - listitem: CSS
  - article:
    - heading "Backend & Data" [level=3]
    - paragraph: Designing APIs, services, and data-driven systems.
    - list:
      - listitem: Node.js
      - listitem: Express
      - listitem: Python
      - listitem: PostgreSQL
      - listitem: MongoDB
      - listitem: Redux
      - listitem: Vector Databases
      - listitem: Odoo
  - article:
    - heading "Tools & Delivery" [level=3]
    - paragraph: Shipping reliable products with modern tooling.
    - list:
      - listitem: Git
      - listitem: CI/CD
      - listitem: DevOps
      - listitem: System Design
  - paragraph: 28 skills across AI, full-stack engineering, and delivery.
  - heading "My projects" [level=2]
  - link "Dragify - AI Workflow Automation Platform No-code AI automation platform for building custom AI agents, integrating enterprise tools, and orchestrating real-time multi-agent workflows. AI Agents Workflow Automation No-Code Platform Webhooks API Integrations Full-Stack Development Details Project I worked on":
    - /url: /projects/dragify-ai-workflow-automation-platform
    - heading "Dragify - AI Workflow Automation Platform" [level=3]
    - paragraph: No-code AI automation platform for building custom AI agents, integrating enterprise tools, and orchestrating real-time multi-agent workflows.
    - list:
      - listitem: AI Agents
      - listitem: Workflow Automation
      - listitem: No-Code Platform
      - listitem: Webhooks
      - listitem: API Integrations
      - listitem: Full-Stack Development
    - text: Details
    - img "Project I worked on"
  - link "Tamiyouz - AI-Powered WhatsApp-to-CRM Sales Automation AI-powered CRM automation that converts WhatsApp conversations into structured lead qualification and automated pipeline movement with optional human takeover. Gemini AI Chatbot AI Agent Development Full-Stack Development Details Project I worked on":
    - /url: /projects/tamiyouz-whatsapp-crm-automation
    - heading "Tamiyouz - AI-Powered WhatsApp-to-CRM Sales Automation" [level=3]
    - paragraph: AI-powered CRM automation that converts WhatsApp conversations into structured lead qualification and automated pipeline movement with optional human takeover.
    - list:
      - listitem: Gemini
      - listitem: AI Chatbot
      - listitem: AI Agent Development
      - listitem: Full-Stack Development
    - text: Details
    - img "Project I worked on"
  - link "EU Grant Finder AI-powered Grant Matcher platform built with React and Node.js to rank real EU funding calls using hybrid scoring and optional AI insights. React.js TypeScript Node.js Express MongoDB OpenAI EU Funding API Details Project I worked on":
    - /url: /projects/eu-grant-finder
    - heading "EU Grant Finder" [level=3]
    - paragraph: AI-powered Grant Matcher platform built with React and Node.js to rank real EU funding calls using hybrid scoring and optional AI insights.
    - list:
      - listitem: React.js
      - listitem: TypeScript
      - listitem: Node.js
      - listitem: Express
      - listitem: MongoDB
      - listitem: OpenAI
      - listitem: EU Funding API
    - text: Details
    - img "Project I worked on"
  - link "Real Estate Website The site is optimized for performance and SEO, with full Arabic and English support, making it ideal for showcasing properties in a polished and professional way. Next.js TypeScript Node.js Tailwind Details Project I worked on":
    - /url: /projects/real-estate-website
    - heading "Real Estate Website" [level=3]
    - paragraph: The site is optimized for performance and SEO, with full Arabic and English support, making it ideal for showcasing properties in a polished and professional way.
    - list:
      - listitem: Next.js
      - listitem: TypeScript
      - listitem: Node.js
      - listitem: Tailwind
    - text: Details
    - img "Project I worked on"
  - link "CRM for Real Estate Company A custom CRM system built to manage leads, clients, and sales for a real estate company. React.js Node.js MUI Details Project I worked on":
    - /url: /projects/real-estate-crm
    - heading "CRM for Real Estate Company" [level=3]
    - paragraph: A custom CRM system built to manage leads, clients, and sales for a real estate company.
    - list:
      - listitem: React.js
      - listitem: Node.js
      - listitem: MUI
    - text: Details
    - img "Project I worked on"
  - link "Grand Events Website An elegant and responsive website for an event management company. Designed with a modern UI to showcase services and events. Next.js Tailwind React Details Project I worked on":
    - /url: /projects/grand-events-website
    - heading "Grand Events Website" [level=3]
    - paragraph: An elegant and responsive website for an event management company. Designed with a modern UI to showcase services and events.
    - list:
      - listitem: Next.js
      - listitem: Tailwind
      - listitem: React
    - text: Details
    - img "Project I worked on"
  - link "Mabrouk - Core Platform & Dashboard A comprehensive client project involving core backend/frontend development, Telegram bot functionality, and a dedicated product dashboard. React Node.js Telegram API Full-Stack Development Details Project I worked on":
    - /url: /projects/mabrouk-project
    - heading "Mabrouk - Core Platform & Dashboard" [level=3]
    - paragraph: A comprehensive client project involving core backend/frontend development, Telegram bot functionality, and a dedicated product dashboard.
    - list:
      - listitem: React
      - listitem: Node.js
      - listitem: Telegram API
      - listitem: Full-Stack Development
    - text: Details
    - img "Project I worked on"
  - link "Learning Rockets Client project focused on active development and strategic planning through ongoing synchronization. Project Planning Full-Stack Development Agile Execution Details Project I worked on":
    - /url: /projects/learning-rockets
    - heading "Learning Rockets" [level=3]
    - paragraph: Client project focused on active development and strategic planning through ongoing synchronization.
    - list:
      - listitem: Project Planning
      - listitem: Full-Stack Development
      - listitem: Agile Execution
    - text: Details
    - img "Project I worked on"
  - heading "Contact me" [level=2]
  - paragraph:
    - text: Please contact me directly at
    - link "yousefeslam214@gmail.com":
      - /url: mailto:yousefeslam214@gmail.com
    - text: or through this form.
  - textbox "Your email"
  - textbox "Your message"
  - button "Submit":
    - text: Submit
    - img
- contentinfo:
  - text: © 2030 Ricardo. All rights reserved.
  - paragraph: "About this website: built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting."
- button:
  - img
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Portfolio Content', () => {
  4  |   test('should render the intro section properly', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     // Check if the hero image/heading is visible
  8  |     const introSection = page.locator('#home');
  9  |     await expect(introSection).toBeVisible();
  10 | 
  11 |     // Check for contact button
  12 |     await expect(page.locator('text=Contact me here')).toBeVisible();
  13 |   });
  14 | 
  15 |   test('should render the newly added projects and experiences', async ({ page }) => {
  16 |     await page.goto('/');
  17 |     
  18 |     // Mabrouk and Learning Rockets should be in the projects section
  19 |     const projectsSection = page.locator('#projects');
  20 |     await expect(projectsSection).toBeVisible();
  21 |     
  22 |     await expect(page.locator('text=Mabrouk - Core Platform & Dashboard')).toBeVisible();
  23 |     await expect(page.locator('text=Learning Rockets')).toBeVisible();
  24 | 
  25 |     // Tamiyouz updates
> 26 |     await expect(page.locator('text=Connected and stabilized Meta integrations (Messenger & Instagram)')).toBeVisible();
     |                                                                                                           ^ Error: expect(locator).toBeVisible() failed
  27 | 
  28 |     // Check for Dragify updates in experience
  29 |     const experienceSection = page.locator('#experience');
  30 |     await expect(experienceSection).toBeVisible();
  31 |     await expect(page.locator('text=Built Dragify\'s core integration nodes')).toBeVisible();
  32 |   });
  33 | });
  34 | 
```