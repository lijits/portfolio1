import React from 'react';

const ProjectsPage = React.forwardRef((props, ref) => {
  // Your GitHub username base URL
  const githubBase = "https://github.com/";

  const projects = [
    {
      id: "01",
      title: "Study Hub",
      category: "FULL-STACK MERN PROJECT",
      description: "Interactive Flashcards, Quiz & Deck Manager with card flipping, search, category filtering, and MongoDB backend integration.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      repo: "lijits/studyhub"
    },
    {
      id: "02",
      title: "GreenCart",
      category: "FULL-STACK MERN E-COMMERCE",
      description: "Sustainable eco-friendly product store with product catalogs, Eco-Score ratings, shopping cart management, JWT authentication, and admin dashboard.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      repo: "lijits/greencart"
    },
    {
      id: "03",
      title: "Jophio Jewellers",
      category: "E-COMMERCE UI",
      description: "Luxury jewelry e-commerce website featuring product showcase galleries, category sections, ticker banners, and custom styling.",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      repo: "lijits/slfprjct"
    },
    {
      id: "04",
      title: "Restaurant Website",
      category: "FRONT-END UI",
      description: "Mobile-responsive restaurant web application featuring menu sections, popular dishes, location details, and Tailwind CSS styling.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      repo: "lijits/restaurant-website"
    }
  ];

  return (
    <div ref={ref} style={{ padding: '40px 20px', color: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{ fontSize: '14px', letterSpacing: '2px', color: '#aaa' }}>03</h3>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>FEATURED WORK</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px', margin: '0 auto' }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              background: '#161616', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '8px', 
              padding: '24px',
              position: 'relative'
            }}
          >
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '6px' }}>{project.category}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0 }}>
                {index + 1}. {project.title}
              </h3>
              <a 
                href={`${githubBase}${project.repo}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  fontSize: '12px', 
                  color: '#4f46e5', 
                  background: 'rgba(79, 70, 229, 0.1)', 
                  padding: '6px 12px', 
                  borderRadius: '4px', 
                  textDecoration: 'none',
                  fontWeight: '500',
                  marginLeft: 'auto'
                }}
              >
                GitHub →
              </a>
            </div>

            <p style={{ fontSize: '14px', color: '#ccc', lineHeight: '1.5', marginBottom: '16px' }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  style={{ 
                    fontSize: '11px', 
                    padding: '4px 8px', 
                    border: '1px solid rgba(212,175,55,0.4)', 
                    borderRadius: '4px',
                    color: '#d4af37'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProjectsPage;