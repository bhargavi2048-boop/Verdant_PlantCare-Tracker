# 🌿 Verdant — Plant Care Tracker

> *Nurture Every Leaf & Root*

A fully responsive, multi-page plant care tracking web application built with pure HTML, CSS, and JavaScript. Verdant helps plant lovers manage watering schedules, browse a plant library, and access expert care tips — all in one beautifully designed interface.

---

## 📸 Preview

```
🌿 Verdant
├── My Garden       → 8 plant cards with live watering controls
├── Schedule        → Weekly calendar + today's task list
├── Plant Library   → 9 plants with search, filter & add-to-garden
├── Care Tips       → 12 expert tips + interactive plant quiz
└── About           → Story, features, contact form
```

---

## 🚀 Live Demo

Demo Link: " https://bhargavi2048-boop.github.io/Verdant_PlantCare-Tracker/ "

Demo Video: " https://drive.google.com/file/d/1I4iDFCtrq4vQ0scDGlLVBSMbGQH-CYQo/view?usp=sharing "

Open `index.html` directly in any modern browser — no server or build tools required.

---

## ✨ Features

### 🌱 My Garden
- Displays 8 plant cards with name, type, emoji, watering frequency, and light requirement
- **Water bar** shows current hydration level for each plant
- **💧 Water button** — animates the water bar to 100% and confirms with a toast notification
- **Details modal** — click any plant to see full care info in a popup
- **+ Add a Plant** modal — fill in name, emoji, type, frequency, and light to dynamically add a new card to the garden
- **Filter buttons** — filter by All / Indoor / Outdoor / Succulents / Herbs
- Live stats pill showing total plants, plants needing water today, and healthy plants

### 📅 Schedule
- **Weekly calendar grid** showing all 7 days with colour-coded task chips:
  - 🟢 Done — completed tasks from past days
  - 🔴 Urgent — tasks due today
  - ⚪ Upcoming — future scheduled care
- **Today's Tasks** panel with per-task "Mark Done" buttons
- **Mark All Done** button to complete every task at once
- **Reminder Settings** with toggle switches for morning, evening, and urgent alerts
- Week navigation (Previous / Next) with toast feedback

### 📚 Plant Library
- Browse 9 popular plants with care details, difficulty ratings, and pet-safety labels
- **Search bar** — filters cards in real time by plant name
- **Filter by:** All / Easy Care / Medium / Expert / Pet Safe
- **+ Add to Garden** button on every plant card
- Scientific names included for each species

### 💡 Care Tips
- 12 curated expert tips covering: Watering, Light, Soil, Pests, Seasonal
- **Filter by category** — show only the tips relevant to your current need
- Featured tip cards highlighted with a sage-green border
- **Interactive Plant Quiz** — 3-question flow that recommends the perfect plant for your lifestyle
  - Fully interactive with next-step logic and a restart option

### 🌿 About
- Brand story section with decorative layout
- Feature overview grid (6 features)
- Mission quote banner
- **Contact form** with name, email, and message fields — includes validation and success feedback

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure across 5 pages |
| **CSS3** | Custom properties, Grid, Flexbox, animations |
| **Vanilla JavaScript** | DOM manipulation, modals, filters, quiz logic |
| **Google Fonts** | Playfair Display (headings) + Lato (body) |
| **No frameworks** | Zero dependencies — pure web standards |

---

## 📁 File Structure

```
plantcare/
├── index.html          # My Garden — main dashboard
├── schedule.html       # Weekly watering schedule
├── library.html        # Plant library with search & filter
├── tips.html           # Care tips + plant quiz
├── about.html          # About page + contact form
├── style.css           # All styles (single unified file)
└── main.js             # All interactive JavaScript
```

---

## 🎨 Design System

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#faf6ef` | Page background |
| `--card` | `#fff9f2` | Card backgrounds |
| `--sage` | `#5a7a5a` | Primary / buttons / active states |
| `--sage2` | `#3d5c3d` | Hover states / footer |
| `--mint` | `#a3c4a0` | Accents / water bars |
| `--warm` | `#c8956c` | Eyebrow labels |
| `--urgent` | `#e07a5f` | Urgent alerts / task borders |
| `--muted` | `#7a8f7a` | Secondary text |

### Typography
- **Headings:** Playfair Display (serif) — elegant and botanical
- **Body:** Lato (sans-serif) — clean and highly readable
- **Italic accent:** Used throughout for brand personality

### Components
- Pill badges for plant types
- Water progress bars
- Toggle switches (CSS-only)
- Modal overlays with ESC-to-close
- Toast notification system
- Tag/filter button rows

---

## ⚙️ How to Run

```bash
# 1. Unzip the project folder
unzip Verdant_PlantCareTracker.zip

# 2. Open in browser (no server needed)
open plantcare/index.html

# OR with VS Code Live Server:
# Right-click index.html → Open with Live Server
```

---

## 📱 Responsive Design

| Breakpoint | Behaviour |
|---|---|
| Desktop (>1100px) | Full multi-column grid layouts |
| Tablet (768–1100px) | Adjusted grid columns, stacked hero |
| Mobile (<768px) | Hamburger nav, single-column cards, hidden hero visual |

---

## 🌟 Interactive Elements Summary

| Element | Behaviour |
|---|---|
| 💧 Water button | Fills water bar, disables for 60s, shows toast |
| + Add Plant | Opens modal form, dynamically adds card to grid |
| Plant Details | Opens detail modal with full care info |
| Garden Filter | Shows/hides cards by plant type |
| Library Search | Real-time text filter on plant names |
| Library Filter | Filters by difficulty or pet safety |
| Schedule Mark Done | Fades out task row, disables button |
| Mark All Done | Batch-completes all tasks with celebration toast |
| Reminder Toggles | CSS toggle switches with feedback toast |
| Tips Filter | Shows/hides tip cards by category |
| Plant Quiz | 3-step interactive quiz with result recommendation |
| Contact Form | Validates all fields, clears on success |
| ESC key | Closes any open modal |
| Overlay click | Closes modal when clicking outside |

---

## 🐾 Plant Data Reference

| Plant | Type | Water Frequency | Light | Pet Safe |
|---|---|---|---|---|
| Peace Lily | Indoor | 7 days | Low | ❌ |
| Cactus | Succulent | 21 days | Bright direct | ✅ |
| Basil | Herb | 3 days | Bright indirect | ✅ |
| Monstera | Indoor | 10 days | Medium | ❌ |
| Sunflower | Outdoor | 4 days | Full sun | ✅ |
| Aloe Vera | Succulent | 14 days | Bright indirect | ❌ |
| Mint | Herb | 2 days | Partial shade | ✅ |
| Pothos | Indoor | 7 days | Low–medium | ❌ |

---

## 🔮 Future Improvements

- [ ] LocalStorage persistence for user-added plants
- [ ] Push notification support via Service Workers
- [ ] Weather API integration for outdoor plant advice
- [ ] Plant health photo journal / upload feature
- [ ] User accounts and cloud sync
- [ ] Dark mode toggle
- [ ] Export schedule as PDF or calendar (.ics)

---

## 👤 Author

**Bhargavi N**
Web Development Internship Project
Built with 🌿 HTML, CSS & JavaScript

---

## 📄 License

This project is built for educational and portfolio purposes.
© 2026 Verdant Plant Care Tracker. All rights reserved.
