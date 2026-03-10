# Roadmap P0

The following tasks represent the minimum architectural foundation required before growth features.

---

## 1. Refactor Posts Collection

Add structural tabs:

Content  
SEO  
Journey  
Conversion  
Trust

---

## 2. Improve Authors Schema

Add fields:

credentials  
expertise  
role  
biography  
profile image

---

## 3. Generate Payload Types

Run Payload type generation to produce:

payload-types.ts

This becomes the type contract between CMS and frontend.

---

## 4. Replace api.js with api.ts

Implement a typed CMS bridge supporting:

pagination  
preview mode  
SSR-safe fetching

---

## 5. Sync Tailwind Design Tokens

Map CSS variables to Tailwind config.

---

## 6. Create SEO Component

SEO.astro

Responsibilities:

metadata  
OpenGraph  
JSON-LD schemas

---

## 7. Create Article Layout

PostLayout.astro

Components:

breadcrumb  
article body  
author trust box  
contextual CTA

---

## 8. Create Dynamic Article Route

[slug].astro

Responsible for rendering articles.

---

## 9. Create Payload Community Collections

Comments  
Likes

Comments must default to pending moderation.

---

## 10. Create Astro API Routes

/api/comments  
/api/likes

---

## 11. Remove Supabase Integration

Only after Payload-based interaction works correctly.