// import Card from '../components/Card';
// import { content } from '../data/content';

// export default function Projects() {
//   return (
//     <main className="content-page fade-in">
//       <h1 className="page-title">My Projects</h1>
//       <div className="enhanced-card-grid">
//         {content.projects.map((item, i) => (
//           <Card key={i} {...item} />
//         ))}
//       </div>
//     </main>
//   );
// }

// pages/Projects.jsx
import EnhancedCard from '../components/EnhancedCard';
import { content } from '../data/content';

export default function Projects() {
  return (
    <main className="content-page fade-in">
      <div className="page-header">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">
          Click on any image to view it in full size
        </p>
      </div>
      <div className="enhanced-card-grid">
        {content.projects.map((item, index) => (
          <EnhancedCard 
            key={index} 
            {...item}
          />
        ))}
      </div>
    </main>
  );
}