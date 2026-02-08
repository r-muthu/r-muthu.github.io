// import Card from '../components/Card';
// import { content } from '../data/content';

// export default function Internships() {
//   return (
//     <main className="content-page fade-in">
//       <h1 className="page-title">My Internship Experiences</h1>
//       <div className="enhanced-card-grid">
//         {content.internships.map((internship, index) => (
//           <Card
//             key={index}
//             title={`${internship.role} at ${internship.company}`}
//             period={internship.period}
//             description={internship.description}
//             image={internship.image}
//             links={internship.links}
//             tech={internship.tech}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }

// pages/Internships.jsx (Note: Changed from Internship to Internships)
import EnhancedCard from '../components/EnhancedCard';
import { content } from '../data/content';

export default function Internships() {
  return (
    <main className="content-page fade-in">
      <div className="page-header">
        <h1 className="page-title">My Internship Experiences</h1>
        <p className="page-subtitle">
          Click on any image to view it in full size
        </p>
      </div>
      <div className="enhanced-card-grid">
        {content.internships.map((internship, index) => (
          <EnhancedCard
            key={index}
            title={`${internship.role} at ${internship.company}`}
            period={internship.period}
            description={internship.description}
            tech={internship.tech}  // Using tech prop
            links={internship.links}
            image={internship.image}
          />
        ))}
      </div>
    </main>
  );
}