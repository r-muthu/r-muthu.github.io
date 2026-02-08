import { Link } from 'react-router-dom';
import { content } from '../data/content';

export default function Home() {
  const { image, introTitle, introText, linkedin } = content.profile;

  return (
    <main className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src={image}
            alt="Profile"
            className="profile-image"
          />
          <div className="hero-text">
            <h1>{introTitle}</h1>
            <p>{introText}</p>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-btn"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              View LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="nav-cards">
          <Link to="/projects" className="nav-card">
            <div className="nav-card-icon">💼</div>
            <h3>Projects</h3>
            <p>Explore my technical projects, code repositories, and development work showcasing my skills and experience.</p>
            <div className="nav-card-arrow">→</div>
          </Link>

          <Link to="/internship" className="nav-card">
            <div className="nav-card-icon">🏢</div>
            <h3>Internships</h3>
            <p>View my professional experiences, roles, responsibilities, and achievements during my internships.</p>
            <div className="nav-card-arrow">→</div>
          </Link>

          <Link to="/activities" className="nav-card">
            <div className="nav-card-icon">🌟</div>
            <h3>Activities</h3>
            <p>Discover my extracurricular activities, leadership roles, competitions, and community involvement.</p>
            <div className="nav-card-arrow">→</div>
          </Link>
        </div>
      </section>
    </main>
  );
}