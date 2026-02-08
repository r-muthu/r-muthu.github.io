// components/EnhancedCard.jsx
export default function EnhancedCard({ 
  title, 
  period, 
  description, 
  tech, 
  links, 
  image 
}) {
  
  // Default image fallback with emoji icons
  const getDefaultIcon = (title) => {
    const icons = {
      project: '💻',
      internship: '🏢',
      activity: '🌟',
      default: '📁'
    };
    
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('project')) return icons.project;
    if (lowerTitle.includes('intern')) return icons.internship;
    if (lowerTitle.includes('activity') || lowerTitle.includes('hackathon') || lowerTitle.includes('competition')) 
      return icons.activity;
    return icons.default;
  };

  return (
    <article className="enhanced-card">
      {/* Image Container - Larger */}
      <div className="card-image-container">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="card-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.innerHTML = `
                <div class="default-image">
                  <div class="default-image-icon">${getDefaultIcon(title)}</div>
                </div>
              `;
            }}
          />
        ) : (
          <div className="default-image">
            <div className="default-image-icon">{getDefaultIcon(title)}</div>
          </div>
        )}
      </div>

      {/* Card Content - More Spacious */}
      <div className="card-content">
        {/* Header */}
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {period && <span className="card-period">{period}</span>}
        </div>

        {/* Description with scroll for longer text */}
        <p className="card-description">{description}</p>

        {/* Technology Tags */}
        {tech && tech.length > 0 && (
          <div className="card-tech">
            {tech.map((item, index) => (
              <span key={index} className="tech-tag">{item}</span>
            ))}
          </div>
        )}

        {/* Action Links */}
        {links && links.length > 0 && (
          <div className="card-links">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="card-link"
              >
                {link.icon && <span>{link.icon}</span>}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}