# Website Development Constitution

_Master Rules & Standards for All Future Website Projects_

**Version:** 1.0  
**Initial Market:** South Africa  
**Applies to:** Every website developed under this development standard.  

## 1. CORE PHILOSOPHY

Every website must be built to be fast, modern, secure, scalable, maintainable and independently transferable.

We do not build websites that depend on one AI model, developer, coding platform, hosting provider or proprietary ecosystem.

The objective is to create high-quality websites that outperform traditional template-based website development.

WordPress is not the default development platform. Technology must be selected based on the specific requirements of the project.

Our websites must be built for long-term ownership, not short-term convenience.

## 2. AI-AGNOSTIC DEVELOPMENT

No website may be dependent on a single AI provider.

Rules:

* Code must remain accessible outside the AI development environment.
* Use standard, documented programming languages and frameworks.
* Keep AI-generated code understandable and maintainable.
* Never store essential project knowledge exclusively in AI conversations.
* Keep prompts, instructions and project documentation in the repository.
* Avoid proprietary AI-specific implementations where alternatives exist.
* AI integrations must use replaceable abstraction layers where practical.

Any competent AI coding assistant must be able to continue development using the repository alone.

## 3. GITHUB & VERSION CONTROL

Every website must have its own GitHub repository.

GitHub is the central source of truth for the website’s source code.

Mandatory requirements:

* Version control from the first line of code.
* Meaningful commit messages.
* README.md containing project instructions.
* Separate development and production environments where practical.
* Feature branches for significant changes.
* Stable versions must remain recoverable.
* No credentials, passwords or API keys in the repository.
* Maintain a CHANGELOG.md.
* Document significant architectural decisions.

Never allow the only working version of a website to exist on one computer or inside an AI development platform.

## 4. DEVELOPER HANDOVER RULE

Any competent human developer or AI coding agent must be able to take over the website without unnecessary complications.

Every repository must include:

* README.md
* MASTER-RULES.md
* AI-INSTRUCTIONS.md
* ARCHITECTURE.md
* CHANGELOG.md
* .env.example
* Dependency and installation instructions
* Deployment instructions
* API documentation where applicable
* Database schema and migration instructions where applicable

The documentation must explain how to install, run, modify, test and deploy the website.

No undocumented critical dependencies.

No reliance on previous developer conversations.

## 5. WEBSITE ARCHITECTURE

Websites must use a clean, modular and understandable architecture.

Requirements:

* Separate frontend and backend responsibilities.
* Reusable components.
* Consistent naming conventions.
* Centralised configuration.
* Clean folder structures.
* Maintainable styling.
* Reusable layouts and design systems.
* Avoid duplicated code.
* Keep business logic separate from presentation.
* Avoid unnecessary dependencies.

Choose frameworks and technologies based on project requirements, not personal preference or AI recommendations.

Do not overengineer simple websites.

## 6. DESIGN & USER EXPERIENCE

Every website must prioritise professional design and usability.

Mandatory standards:

* Mobile-first development.
* Fully responsive layouts.
* Modern, professional visual design.
* Consistent typography.
* Consistent spacing and sizing.
* Clear navigation.
* Strong visual hierarchy.
* Accessible colour contrast.
* Intuitive user journeys.
* Fast-loading pages.
* Clear calls to action.

Never use generic AI-generated layouts without proper design consideration.

Every website must have a deliberate visual identity suited to its business and target audience.

## 7. PERFORMANCE

Performance is a priority, not an afterthought.

Requirements:

* Optimised images.
* Modern image formats where supported.
* Lazy loading where appropriate.
* Minimise unnecessary JavaScript.
* Avoid excessive third-party scripts.
* Optimise CSS and assets.
* Use caching where appropriate.
* Minimise server requests.
* Test mobile performance.
* Monitor Core Web Vitals.

Target Google’s recommended Core Web Vitals:

* LCP: 2.5 seconds or less.
* INP: 200 milliseconds or less.
* CLS: 0.1 or less.

Performance must be measured, not assumed.

## 8. SEO & SEARCH VISIBILITY

SEO must be considered from the beginning of development.

Every website must support:

* Custom page titles.
* Meta descriptions.
* Canonical URLs.
* XML sitemaps.
* Robots.txt.
* Semantic HTML.
* Structured data/schema markup where appropriate.
* Open Graph metadata.
* Image alt text.
* Logical heading structures.
* Clean URL structures.
* Internal linking.
* Search engine indexing controls.

For South African businesses:

* Consider local SEO.
* Support Google Business Profile integration where relevant.
* Use appropriate local business schema.
* Optimise for location-specific searches.
* Use ZAR and South African business information where appropriate.

SEO must be tailored to the actual business and its services.

## 9. SECURITY

Security must be considered throughout development.

Mandatory requirements:

* HTTPS.
* Secure handling of user information.
* Input validation.
* Protection against common web vulnerabilities.
* Secure authentication where applicable.
* Appropriate access controls.
* Secure API endpoints.
* No exposed credentials.
* Regular dependency updates.
* Backups for important data.
* Appropriate privacy notices and POPIA considerations.

Never collect unnecessary personal information.

## 10. SOUTH AFRICAN MARKET REQUIREMENTS

South Africa is the initial target market.

Websites must consider:

* ZAR currency.
* South African telephone number formats.
* Local business addresses.
* WhatsApp integration where appropriate.
* Local payment gateways.
* VAT requirements where relevant.
* POPIA compliance.
* Mobile data usage and connectivity.
* Local hosting options.
* Local customer expectations.

The architecture must remain adaptable for international expansion.

## 11. CONTENT MANAGEMENT & OWNERSHIP

Clients must have appropriate control over their website.

Where relevant, provide:

* Editable website content.
* Image and media management.
* Editable contact information.
* Service and product management.
* Blog or news publishing.
* Appropriate administrative access.

Avoid making clients dependent on a developer for ordinary content updates.

Choose the simplest suitable content management solution for each project.

## 12. ACCESSIBILITY & COMPATIBILITY

Websites must:

* Follow WCAG accessibility principles, targeting WCAG 2.2 AA where practical.
* Support modern desktop and mobile browsers.
* Use semantic HTML.
* Support keyboard navigation.
* Include accessible forms.
* Provide meaningful error messages.
* Avoid inaccessible design patterns.

## 13. TESTING & QUALITY CONTROL

A website is not finished simply because it looks good.

Before deployment, test:

* Desktop layouts.
* Mobile layouts.
* Navigation.
* All links.
* Contact forms.
* WhatsApp links.
* Email links.
* Interactive components.
* Image loading.
* SEO metadata.
* Page performance.
* Security basics.
* Browser compatibility.
* Error handling.

Test important user journeys from beginning to end.

## 14. HOSTING & DEPLOYMENT INDEPENDENCE

The website owner must retain control over:

* Source code.
* Domain registration.
* Hosting accounts.
* DNS configuration.
* Database access.
* API credentials.
* Backups.

Avoid unnecessary hosting-provider lock-in.

Deployment must be documented and reproducible.

Where practical, use standard build processes and portable hosting solutions.

The website must be capable of being migrated to another suitable hosting provider.

## 15. DEVELOPMENT WORKFLOW

Every website follows this workflow:

1. Understand the business and target audience.
2. Establish website objectives.
3. Define the sitemap and page structure.
4. Establish the visual identity.
5. Select the appropriate technology.
6. Document the architecture.
7. Create the GitHub repository.
8. Develop in manageable stages.
9. Test throughout development.
10. Optimise SEO and performance.
11. Complete security and quality checks.
12. Deploy to production.
13. Verify the live website.
14. Hand over documentation and ownership.

## 16. CHANGE MANAGEMENT

Every significant change must be traceable.

Before modifying an existing website:

* Review its current architecture.
* Read the project instructions.
* Understand existing functionality.
* Identify potential side effects.
* Preserve working features.
* Test changes before deployment.
* Update documentation.

Never perform unnecessary full rewrites.

## 17. THE NON-NEGOTIABLE RULE

Every website must be capable of surviving the departure of its original developer, AI assistant, development platform or hosting provider.

A new developer must be able to clone the repository, follow the documentation, install the dependencies, run the website and continue development without relying on the original creator.

We build websites that we own, understand and control. We do not build websites that own us.

---

Document authority: This constitution applies to all future website projects. Individual projects may introduce additional requirements but may not silently compromise these standards.
