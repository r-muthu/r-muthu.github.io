// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

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