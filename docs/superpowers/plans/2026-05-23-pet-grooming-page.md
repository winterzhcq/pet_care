# Pet Grooming Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a warm neighborhood pet grooming store single-page website.

**Architecture:** The site is a static HTML/CSS page with no build step. A small Node test verifies key page content and structural links before implementation.

**Tech Stack:** HTML, CSS, Node.js built-in `node:test`, direct browser opening.

---

## File Structure

- Create `index.html`: semantic single-page content and section anchors.
- Create `styles.css`: responsive layout, warm visual system, desktop/mobile grids.
- Create `test/page.test.mjs`: structural tests for required sections, CTAs, stylesheet link, and content.

### Task 1: Page Contract Test

**Files:**
- Create: `test/page.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("page includes required storefront sections and appointment actions", () => {
  for (const id of ["services", "process", "pricing", "space", "reviews", "contact"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  assert.match(html, /宠物洗护/);
  assert.match(html, /立即预约/);
  assert.match(html, /查看套餐/);
  assert.match(html, /styles\.css/);
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test test/page.test.mjs`

Expected: FAIL because `index.html` does not exist yet.

### Task 2: Static Page

**Files:**
- Create: `index.html`
- Create: `styles.css`

- [ ] **Step 1: Implement the HTML**

Create semantic sections for header, hero, services, process, pricing, store environment, testimonials, and contact.

- [ ] **Step 2: Implement the CSS**

Add responsive styling with a warm off-white base, soft orange accents, grass green highlights, deep green text, 8px card radius, and mobile-safe layout.

- [ ] **Step 3: Run the test to verify it passes**

Run: `node --test test/page.test.mjs`

Expected: PASS.

### Task 3: Browser Verification

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Open the page locally**

Run: `open /Users/wenminggang/Documents/pet_care/index.html`

- [ ] **Step 2: Check desktop and mobile readability**

Use browser inspection or screenshots to confirm no overlapping text, broken images, or unreadable controls.
