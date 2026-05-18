# Satyam Gupta - Interactive Personal Portfolio ✨

Welcome to my personal portfolio repository! This is a modern, highly interactive, and responsive web application built with **React** and **Vite**. It showcases my skills, experience, projects, and features a custom-built AI assistant.

## 🚀 Live Demo
*(You can add your live deployment URL here once deployed)*

## ✨ Key Features

- **Modern UI/UX:** Premium dark theme with glassmorphism (backdrop-blur) elements and smooth gradient accents.
- **Fluid Animations:** Scroll-triggered reveals, staggered entries, and hover interactions powered by `Framer Motion`.
- **Interactive Particle Background:** A custom HTML5 Canvas particle system that reacts to mouse movements.
- **AI Chatbot Integration:** Meet **Satyam Vadami**, an integrated AI assistant that can answer questions about my background, skills, and projects. It features real-time response streaming and Markdown rendering.
- **Dynamic Sections:**
  - **Hero:** Full-viewport landing with a typing effect, rotating avatar elements, and floating tech badges.
  - **About:** Split-layout bio featuring a simulated code-editor component and animated stat counters.
  - **Education & Experience:** Vertical timelines detailing my academic journey and professional experience at Blue Yonder, alongside animated skill progress bars.
  - **Projects:** Filterable project grid highlighting my recent work (e.g., MERN Chat App, Store Management System) with interactive hover overlays.
  - **Contact:** Glassmorphic contact form with client-side validation and social links.

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.x
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Global Variables, CSS Modules, Responsive Design)
- **Animations:** Framer Motion
- **Icons:** React Icons (FontAwesome, SimpleIcons, HeroIcons)
- **Routing/Scrolling:** React Scroll
- **Markdown Rendering:** React Markdown (for the AI Chatbot)

## ⚙️ Running Locally

Follow these steps to run the portfolio on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Satyamg111/Satyam-Portfolio.git
   cd Satyam-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the AI Backend (Optional but recommended for the Chatbot):**
   Ensure the API URL in `src/config.js` is pointing to your active backend (or leave the default deployed URL if active).
   ```javascript
   // src/config.js
   const config = {
     chatbot: {
       baseUrl: 'https://ai-backend-3oke.onrender.com', // Or http://localhost:8000 for local backend
       agent: 'resume',
     },
   }
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```text
src/
├── App.jsx                     # Main layout orchestrator
├── config.js                   # Global configuration (e.g., Chatbot API)
├── index.css                   # Global styles, variables, and animations
├── main.jsx                    # Application entry point
└── components/
    ├── About.jsx / .css        # Bio, stats, and code snippet visual
    ├── Chatbot.jsx / .css      # Floating AI assistant with streaming & markdown
    ├── Contact.jsx / .css      # Contact form and information
    ├── Education.jsx / .css    # Timelines and animated skill bars
    ├── Footer.jsx / .css       # Bottom navigation and socials
    ├── Hero.jsx / .css         # Landing section with typing effect
    ├── Navbar.jsx / .css       # Fixed navigation with active scroll spy
    ├── ParticleBackground.jsx  # Canvas-based interactive background
    └── Projects.jsx / .css     # Filterable project gallery
```

## 🤝 Let's Connect

- [LinkedIn](https://linkedin.com/in/satyam-gupta-4a513720b)
- [GitHub](https://github.com/Satyamg111)
- [Instagram](https://www.instagram.com/satyam_g._/)
- Email: satyam97102@gmail.com

---
*Built with ❤️ and React.*
