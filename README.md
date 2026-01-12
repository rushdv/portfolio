# Modern Developer Portfolio

A personal portfolio website built with modern web technologies, featuring a clean dark theme, smooth animations, and a responsive design.

![Portfolio Preview](https://i.imgur.com/your-preview-image.png)

## 🚀 Built With

- **[React](https://reactjs.org/)** - UI Library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

## ✨ Features

- **Dark Mode Design**: Sleek dark slate theme (`#0f172a`) with cyan accents.
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile, tablet, and desktop.
- **Interactive Animations**: Smooth entrance animations and hover effects powered by Framer Motion.
- **Scroll Spy Navigation**: Navbar that updates active state based on scroll position.
- **Mobile Menu**: Custom hamburger menu with backdrop blur for mobile devices.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Navbar, Footer)
├── sections/        # Page sections (Hero, About, Projects, Skills, Contact)
├── assets/          # Static assets
└── App.jsx          # Main application entry
```

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` to change the `slate` (background) or `cyan` (primary) color palettes.
- **Content**: Update the sections in `src/sections/` to add your own bio, projects, and skills.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
