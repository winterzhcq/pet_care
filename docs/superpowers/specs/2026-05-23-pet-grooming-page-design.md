# Pet Grooming Single Page Design

## Goal

Build a static single-page website for a neighborhood pet grooming store. The page should help nearby pet owners quickly understand the store's services, pricing, environment, and how to make an appointment.

## Audience

Primary users are local pet owners browsing on mobile. They need clear service information, visible pricing, signs of trust, and a direct appointment path.

## Visual Direction

Use a warm neighborhood-store style: approachable, clean, trustworthy, and not overly promotional. The palette should combine warm off-white, soft orange, grass green, and deep green accents. Cards and controls should use restrained 8px-radius styling.

## Page Structure

1. Header with store name, compact navigation, and appointment action.
2. Hero section with a pet grooming message, short trust statement, primary appointment CTA, secondary package CTA, and a realistic grooming image.
3. Services section covering bath, trimming, de-shedding, nail care, ear cleaning, and skin/coat care.
4. Process section explaining booking, arrival check, wash and care, drying and styling, and pickup.
5. Pricing section with small dog, medium dog, large dog, and cat grooming packages.
6. Store environment section showing hygiene, gentle handling, visible grooming area, and waiting comfort.
7. Testimonials section with short local customer quotes.
8. Footer/contact section with address, hours, phone/WeChat placeholder, and final appointment CTA.

## Implementation

Create a static site in the project root:

- `index.html` for semantic content.
- `styles.css` for responsive layout and visual design.
- `script.js` only if needed for small interactions.

No framework is required. The page should work by opening `index.html` directly in a browser.

## Responsiveness

The page must be comfortable on mobile and desktop. Mobile should stack sections, keep CTAs easy to tap, and avoid text overlap. Desktop can use two-column hero and grid sections.

## Assets

Use remote image URLs or lightweight CSS-backed placeholders if no local assets exist. Images should support the real pet-grooming context and should not be purely decorative.

## Verification

Verify that the page opens locally, renders without broken layout, and remains readable on desktop and mobile widths.
