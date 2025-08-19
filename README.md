# Noufiya Nazeem - Portfolio Website

A modern, responsive portfolio website for Noufiya Nazeem, a Software Developer and AI Specialist. Built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Apple-inspired minimalist aesthetic with glassmorphism effects
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Sections**: 
  - Hero section with animated background
  - About section with expertise areas
  - Projects section with category filtering
  - Skills section with animated progress bars
  - Certifications with modal popups
  - Contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd noufy-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
noufy-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js` under the `theme.extend.colors` section.

### Content
Update the content in each component file:
- `Hero.jsx`: Update name, title, and headline
- `About.jsx`: Update bio and expertise areas
- `Projects.jsx`: Add your projects with images, descriptions, and links
- `Skills.jsx`: Update skills and proficiency levels
- `Certifications.jsx`: Add your certifications
- `Contact.jsx`: Update social links and contact information

### Images
Replace placeholder images with actual photos:
- Profile photo in Hero section
- Project screenshots in Projects section
- Certificate images in Certifications section

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The website includes a built-in dark/light mode toggle that:
- Persists user preference in localStorage
- Respects system preference on first visit
- Smoothly transitions between themes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any questions or support, please reach out to Noufiya Nazeem.

---

Built with ❤️ using React, Vite, and TailwindCSS
