# Avengers Club Recruit Page — College Club Recruitment Website

A visually stunning, modern, fully responsive college club recruitment website for the fictional student organization **AVENGERS CLUB**. Combines the cinematic atmosphere of the Marvel Avengers universe and a classified S.H.I.E.L.D. command center with the professionalism and functionality of a real college club recruitment portal.

---

## 🌟 Key Features & Highlights

1. **Classified S.H.I.E.L.D. Command Center Visual Identity**:
   - Deep command black and dark steel surfaces (`#06080e`, `#0a0f18`, `#0f172a`).
   - Electric cyan & Arc blue glowing accents (`#00f0ff`, `#38bdf8`), subtle Stark red (`#ef4444`), and Avengers gold highlights (`#fbbf24`).
   - Animated Arc Reactor MK-VII SVG energy core with counter-rotating stator/inductor rings and reaction chamber.
   - Futuristic HUD overlays: scanlines, telemetry status badges, corner brackets, and coordinate grids.

2. **Full Section Implementation**:
   - **Navbar**: Sticky HUD header with active section tracking, live recruitment status beacon, Web Audio FX toggle, and responsive mobile drawer.
   - **Hero Section (“EARTH NEEDS YOU”)**: Headlines, "JOIN THE INITIATIVE" and "EXPLORE THE TEAM" CTAs, Arc Reactor energy core, and scroll prompt.
   - **About the Club (“ONE TEAM. ONE MISSION.”)**: "More Than a Club. A Movement." ethos with 4 core value cards (Innovation, Teamwork, Leadership, Impact).
   - **Activities and Initiatives (“SUIT UP FOR ACTION”)**: 6 specialized division cards (Tech & Innovation, Creative Arts, Event Operations, Community Outreach, Strategy & Research, Competitions & Challenges) with deep-dive modal dossiers.
   - **Team Showcase (“MEET YOUR EARTH'S MIGHTIEST”)**: 6 fictional student leaders (Tony Stark, Steve Rogers, Natasha Romanoff, Bruce Banner, Thor Odinson, Peter Parker) with roles, clearance levels, bios, and demo disclaimer.
   - **Recruitment Process (“YOUR INITIATIVE STARTS HERE”)**: 3-step pipeline (01 Apply, 02 Connect, 03 Make an Impact) with connected progress line.
   - **Mission Statistics (“OUR IMPACT”)**: Animated number counters (120+ Active Members, 6 Divisions, 15+ Projects Completed, 20+ Events) triggered on viewport intersection.
   - **Testimonials (“FROM OUR INITIATIVE MEMBERS”)**: Authentic student perspectives with avatar rings and division badges.
   - **Frequently Asked Questions**: Smooth single-item open accordion answering the 6 key recruitment questions.
   - **Recruitment Application Form (“ENLIST NOW”)**: Accessible form with live validation for all fields, duplicate submission prevention, and generated S.H.I.E.L.D. Clearance Candidate Dossier.
   - **Footer (“THE INITIATIVE LIVES ON”)**: Emblem, mission statement, navigation links, transmission channels, and back-to-top control.

3. **Procedural Web Audio API Sound Synthesizer**:
   - Zero external audio files required.
   - Synthesizes realistic sci-fi UI blips, laser chirps, division chimes, and recruitment fanfare.
   - Includes a user toggle button in the navbar with saved preferences.

4. **Accessibility & Responsive Design**:
   - Fully responsive across desktop, tablet, and mobile viewports.
   - High color contrast ratios, semantic HTML5, and keyboard navigable forms and modals.
   - Reduced-motion mode support via `@media (prefers-reduced-motion: reduce)`.

---

## 🚀 Running the Project

### Option 1: Built-in Node Server (Zero Dependencies)
Run the included standalone server using Node.js:
```bash
node server.js
```
Then open your browser and visit:
```
http://localhost:3000
```

### Option 2: Direct Browser Access
You can also open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 📁 Project Architecture

```
avengers-club-recruitment/
├── index.html                   # High-tech single page application shell & mount
├── package.json                 # Project configuration & npm scripts
├── server.js                    # Zero-dependency local development server
├── README.md                    # Project documentation
└── src/
    ├── audio.js                 # Web Audio API sci-fi synthesizer
    ├── data/
    │   └── clubData.js          # Centralized data store (values, divisions, leaders, FAQs)
    ├── styles/
    │   └── theme.css            # Sci-Fi HUD brackets, animations, scanlines & scrollbars
    └── components/
        ├── Icons.jsx            # SVG icon library & Arc Reactor energy core
        ├── Navbar.jsx           # Sticky HUD header & navigation
        ├── Hero.jsx             # Hero section with Arc Reactor & CTAs
        ├── About.jsx            # Movement ethos & 4 core values
        ├── Activities.jsx       # 6 tactical divisions
        ├── DivisionModal.jsx    # Deep-dive interactive division dossier
        ├── Team.jsx             # Earth's Mightiest student council
        ├── RecruitmentProcess.jsx # 3-step recruitment pipeline
        ├── Statistics.jsx       # Animated impact counters
        ├── Testimonials.jsx     # Student member testimonials
        ├── FAQ.jsx              # Accordion with 6 inquiries
        ├── ApplicationForm.jsx  # Accessible recruitment enlistment form
        └── Footer.jsx           # Classified footer & back-to-top control
```

---

## 🛡️ License
MIT License. Created for the Avengers Club College Recruitment Initiative.
