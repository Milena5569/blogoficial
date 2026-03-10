# Test Strategy

Testing focuses on the critical infrastructure layers of the platform.

---

## CMS Layer

Validate:

Posts schema structure  
Authors schema structure  
Moderation status for comments

---

## API Layer

Validate:

api.ts CMS bridge  
pagination support  
preview mode behavior

---

## Frontend Layer

Validate:

SEO component output  
dynamic article rendering  
error handling in [slug].astro

---

## Community Layer

Validate:

comment moderation workflow  
likes persistence through Payload

---

## Build Validation

The following commands must run successfully:

npm run build  
npm run lint  
npm run typecheck