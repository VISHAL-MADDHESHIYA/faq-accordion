# 🎯 FAQ Accordion - Advanced Vanilla Edition

**A modern, fully responsive, and accessible FAQ component built with pure HTML, CSS, and JavaScript.**

---
## 🔗 Project Links

- **Live Demo:** [https://vishal-maddheshiya.github.io/faq-accordion/](https://vishal-maddheshiya.github.io/faq-accordion/)
- **GitHub Repository:** [https://github.com/VISHAL-MADDHESHIYA/faq-accordion](https://github.com/VISHAL-MADDHESHIYA/faq-accordion)

## 📖 Overview

This project is a feature-rich **FAQ Accordion** built as part of an internship task. It goes beyond basic requirements by including live search, category filtering, and full keyboard accessibility. It demonstrates core DOM manipulation, event handling, and responsive UI design principles.

> **Objective:** Practice DOM events, `classList` manipulation, and building simple interactive UI components.

---

## ✨ Key Features

### 🎯 Core Functionality
- **Expand/Collapse Answers** — Smooth animation using CSS `max-height` transitions.
- **Single Open Behavior** — Only one answer stays open at a time for a clean UX.
- **Clear Active State** — The active question is highlighted with a rotated icon and colored border.

### 🚀 Advanced Features (Beyond Requirements)
- **🔍 Live Search** — Instantly filter FAQs by typing in the search box.
- **🏷️ Category Filtering** — Filter questions by *General*, *Technical*, or *Billing* tabs.
- **⌨️ Keyboard Navigation** — Navigate between questions using `Arrow Down` / `Arrow Up` keys.
- **🔗 Deep Linking** — Opening a FAQ updates the URL hash (`#q1`, `#q2`) for shareable links.
- **📱 Fully Responsive** — Optimized for mobile, tablet, and desktop screens.
- **♿ Accessibility First** — Built with ARIA attributes and native `<button>` elements.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, ARIA accessibility |
| **CSS3** | Flexbox, CSS Variables, Transitions, Responsive Design |
| **JavaScript (ES6)** | DOM manipulation, Event handling, Array methods |

---

## 📂 Project Structure

```plaintext
faq-accordion/
│
├── index.html          # Main HTML structure (16 FAQ items)
├── style.css           # Styling, animations, and responsive design
├── script.js           # Accordion, search, filter, and keyboard logic
└── README.md           # Project documentation