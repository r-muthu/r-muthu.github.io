// import Card from '../components/Card';
// import { content } from '../data/content';

// export default function Activities() {
//   return (
//     <main className="content-page fade-in">
//       <h1 className="page-title">My Activities</h1>
//       <div className="enhanced-card-grid">
//         {content.activities.map((item, i) => (
//           <Card key={i} {...item} />
//         ))}
//       </div>
//     </main>
//   );
// }

// pages/Activities.jsx
import EnhancedCard from '../components/EnhancedCard';
import { content } from '../data/content';

export default function Activities() {
  return (
    <main className="content-page fade-in">
      <div className="page-header">
        <h1 className="page-title">My Activities</h1>
        <p className="page-subtitle">
          Click on any image to view it in full size
        </p>
      </div>
      <div className="enhanced-card-grid">
        {content.activities.map((item, index) => (
          <EnhancedCard 
            key={index} 
            {...item}
          />
        ))}
      </div>
    </main>
  );
}