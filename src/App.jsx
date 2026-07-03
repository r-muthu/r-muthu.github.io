import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Internship from './pages/Internship.jsx'
import Projects from './pages/Projects.jsx'
import Activities from './pages/Activities.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  )
}

// ----------------------------
// 14. GitHub Pages deployment (ROOT DOMAIN)
// ----------------------------
// To deploy at https://<your-username>.github.io/
// you MUST name the repository:
// <your-username>.github.io

// Example:
// GitHub username: johndoe
// Repository name: johndoe.github.io

// No "homepage" field is needed in package.json

// Install gh-pages:
// npm install gh-pages --save-dev

// package.json scripts:
// "scripts": {
//   "predeploy": "npm run build",
//   "deploy": "gh-pages -d dist"
// }

// React Router setup for root domain:
// In main.jsx, BrowserRouter should be:
// <BrowserRouter basename="/">

// IMPORTANT:
// Create public/404.html with the SAME contents as index.html
// This ensures subpages like /projects work on refresh

// Deploy steps:
// git init
// git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
// git push -u origin main
// npm run deploy

// Live site:
// https://<your-username>.github.io/