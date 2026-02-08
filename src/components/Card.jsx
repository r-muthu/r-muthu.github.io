export default function Card({
  title,
  period,
  description,
  image = null,
  links = [],
  tech = [],
}) {
  return (
    <article className="enhanced-card">
      {image && (
        <div className="card-image-container">
          <img src={image} alt={title} className="card-image" />
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <div>
            <h3 className="card-title">{title}</h3>
            {period && <span className="card-period">{period}</span>}
          </div>
        </div>
        <p className="card-description">{description}</p>
        {tech && tech.length > 0 && (
          <div className="card-tech">
            {tech.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="card-links">
            {links.map((link, i) => (
              <a 
                key={i} 
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
