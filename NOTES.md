# FE-05 Accessibility Notes

## Overview

This assignment focused on building accessible interactive components from scratch using React and TypeScript.

The playground contains three components:

- Modal
- Tabs
- Disclosure

Each component was tested using keyboard-only interaction.

---

## 1. Modal Accessibility

The Modal component uses a semantic dialog structure and manages keyboard interaction.

### Implemented

- Keyboard focus is trapped inside the modal.
- `Escape` closes the modal.
- Focus returns to the element that opened the modal.
- Interactive elements are reachable using `Tab`.
- The modal provides a visible focus state.



### Verification

The Modal was tested without using the mouse.

**Result: PASS**

---



## 2. Tabs Accessibility

The Tabs component follows an ARIA-style tab structure.

### Implemented

- `role="tablist"` identifies the tab container.
- Each tab uses `role="tab"`.
- The active tab uses `aria-selected`.
- Tab panels use `role="tabpanel"`.
- `aria-controls` connects tabs with their panels.
- Arrow Right and Arrow Left change the active tab.
- `Home` moves to the first tab.
- `End` moves to the last tab.
- Only the active panel is displayed.



### Verification

The Tabs component was tested using keyboard-only navigation.

**Result: PASS**

---



## 3. Disclosure Accessibility

The Disclosure component uses a native button for interaction.

### Implemented

- Uses a semantic `<button>`.
- Uses `aria-expanded` to communicate the current state.
- Uses `aria-controls` to associate the button with its content.
- Supports keyboard activation using Enter and Space.
- Provides a visible focus state.



### Verification

The Disclosure component was tested using keyboard-only interaction.

**Result: PASS**

---



## Accessibility Lessons

Building these components manually demonstrated that accessibility requires more than visual styling.

Important lessons learned:

1. Native HTML elements should be preferred whenever possible because they provide built-in keyboard behavior.
2. ARIA attributes should communicate component state and relationships to assistive technologies.
3. Keyboard focus must be intentionally managed for complex components such as dialogs and tabs.
4. Visual focus indicators are important because keyboard users need to know which element is currently active.
5. Keyboard-only testing can reveal interaction problems that are not obvious during normal mouse-based testing.

---



## Manual Components vs Component Libraries

Building the components manually provided a better understanding of accessibility behavior and keyboard interaction.

A component library such as shadcn/ui can reduce implementation effort by providing reusable accessible patterns, but developers still need to understand the underlying behavior.

The manual implementation was useful because it made the following responsibilities explicit:

- Focus management
- Keyboard event handling
- ARIA relationships
- Active state management
- Focus restoration
- Accessible semantic HTML

---



## Final Verification


| Component  | Keyboard Tested | ARIA / Semantic Structure | Status |
| ---------- | --------------- | ------------------------- | ------ |
| Modal      | Yes             | Yes                       | PASS   |
| Tabs       | Yes             | Yes                       | PASS   |
| Disclosure | Yes             | Yes                       | PASS   |


All three components passed the manual keyboard accessibility verification.

---



## shadcn/ui Comparison

After completing the components manually, shadcn/ui Dialog and Tabs components were added for comparison.

The goal was not to replace the custom components, but to understand how a production-oriented component implementation handles accessibility.

### Dialog Comparison

The custom Modal implementation successfully handles:

- Focus trapping
- Escape-to-close
- Focus restoration
- Dialog semantics
- Keyboard navigation

The shadcn Dialog implementation provides a more complete reusable abstraction around these behaviors and handles additional interaction details internally.

### Tabs Comparison

The custom Tabs implementation successfully handles:

- ARIA tab roles
- Active tab state
- Arrow key navigation
- Home and End navigation
- Tab-to-panel relationships
- Keyboard focus

The shadcn Tabs implementation provides a reusable and more comprehensive pattern for managing these interactions.

### What I Learned

The main lesson from the comparison is that accessibility is not only about adding ARIA attributes.

Complex components require careful management of:

- Focus
- Keyboard events
- Component state
- Element relationships
- Interaction edge cases

Building the components manually first made these responsibilities much easier to understand.

Using a mature component library can reduce implementation effort and provide battle-tested interaction patterns, but developers still need to understand accessibility fundamentals to use these abstractions correctly.

## Capstone Reflection

Building this capstone was challenging because I had to bring together the concepts I learned throughout the internship into one production-ready application rather than treating each feature as an isolated exercise. The hardest part was balancing AI functionality with performance, accessibility, resilience, and maintainability. In particular, integrating streaming AI responses and server-side lead scoring while keeping API credentials protected required careful separation between client and server responsibilities. Performance optimization was also challenging because the project included shader and 3D experiences that could negatively affect the initial page load. I had to make deliberate trade-offs, such as deferring expensive visual experiences and providing reduced-motion and lower-capability fallbacks, while still preserving the intended user experience.

If I were building the project again, I would establish the testing, accessibility, and performance strategy earlier instead of treating them mainly as final verification steps. I would also define the AI tool contract and error-handling strategy earlier in development so that edge cases could be considered from the beginning. This would reduce rework near the production stage and make the development process more predictable.

One thing that surprised me was how much a relatively small frontend application requires beyond simply making the features work. A production-ready application needs attention to keyboard interaction, screen-reader communication, loading behavior, API limits, error states, performance, testing, deployment, and documentation. The Lighthouse and WAVE audits especially showed me that accessibility and performance improvements can require changes to both implementation and design decisions. The biggest lesson I learned is that shipping a frontend product is not just about writing code—it is about making deliberate engineering decisions, verifying them with evidence, and documenting the result so another developer can understand and maintain the project.