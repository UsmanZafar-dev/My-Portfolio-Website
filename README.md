# Usman Zafar | Portfolio Website 🚀

A modern, responsive, and high-performance developer portfolio showcasing full-stack capabilities, Machine Learning systems, Android application development, and AI-powered solutions.

## 🌐 Live Demo
The project is built as a single-page application (SPA) using React, Vite, and modern styling architectures, optimized for lightning-fast loading speeds and responsive layouts.

---

## 🚀 Key Features

* **Hero Showcase**: A clean introduction section with location tags, responsive typing animations highlighting roles, and interactive shortcuts to get in touch or open the PDF resume.
* **About Me**: A centralized introduction detailing academic achievements, CS specialization at the University of Central Punjab, and technical areas of focus.
* **Interactive Skills Grid**: Categorized tech stacks (Core Languages, AI & ML, Mobile Development, Backend & APIs, Databases, Tools & Platforms) styled with glowing vector icons.
* **Featured Projects**:
  * **INFITRON**: A smart Android wardrobe management application displaying an autoplaying video showcase inside a premium phone mockup frame.
  * **ML & NLP Grid**: Interactive project cards (Heart Disease Prediction, Toxic Comment Classifier, House Price Prediction, etc.) with custom hover glow effects and horizontally aligned tags.
* **Responsive Contact Hub**: A grid layout containing phone, email, and location card details, coupled with a stateful interactive contact form.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React 18 (Single Page Application SPA)
* **Build Tool & Bundler**: Vite (Optimized production bundles and fast HMR)
* **Styling & Theme**: Custom Vanilla CSS featuring HSL color variables, modern dark-mode palettes, and glassmorphism.
* **Animations**:
  * **Typing Loop**: React stateful typing effect on the hero header.
  * **Scroll Reveals**: Intersection Observer API for smooth fade-in scrolling animations.
  * **CSS Keyframes**: Custom hover transforms, glowing borders, and interactive transitions.
* **Vector Icons**: Devicon integration combined with responsive custom SVGs.
* **Showcase Media**: Optimized HTML5 `<video>` autoplay layout inside a responsive CSS mobile device frame mockup.
* **Deployment**: Vercel CDN.

---

## 📁 Project Structure

```bash
My-Portfolio/
├── public/                # Static assets
│   ├── assets/            # Resume PDF, avatar, portrait, showcase videos
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx            # Main app container
│   ├── index.css          # Core design system & responsive styling tokens
│   └── main.jsx           # App entry point
├── package.json           # Scripts & project dependencies
├── vite.config.js         # Vite compiler configuration
└── .gitignore             # Git push filters
```

---

## 💻 Local Setup & Development

To run this project locally on your machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/My-Portfolio-Website.git
   cd My-Portfolio-Website
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open the browser**:
   Navigate to `http://localhost:5173` to view the live project.

