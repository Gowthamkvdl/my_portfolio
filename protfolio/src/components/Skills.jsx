import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SiCodepen } from 'react-icons/si';

// Removed all external icon imports (Di, Si, Fa, SiCodepen) to resolve compilation errors.
// All icons are now rendered using inline SVG functions below for stability.

// --- Inline SVG Icon Definitions ---
// Define simple, colored SVG components to replace external libraries.

// General code icon for multiple categories
const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.6 16.6l1.6-1.6c.8-.8.8-2 0-2.8l-1.6-1.6-1.4 1.4 1.6 1.6c.4.4.4 1 0 1.4l-1.6 1.6 1.4 1.4zM9.4 16.6l-1.4-1.4 1.6-1.6c.4-.4.4-1 0-1.4l-1.6-1.6 1.4-1.4 1.6 1.6c.8.8.8 2 0 2.8l-1.6 1.6zM7 21h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zm10-4V7H7v10h10z"/>
  </svg>
);

// Database icon (MongoDB, MySQL)
const DatabaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3C7.5 3 4 5.25 4 8v3c0 2.75 3.5 5 8 5s8-2.25 8-5V8c0-2.75-3.5-5-8-5zm0 10c-3.31 0-6-1.34-6-3s2.69-3 6-3 6 1.34 6 3-2.69 3-6 3zm-6 4v-2c0 2.75 3.5 5 8 5s8-2.25 8-5v2c0 2.75-3.5 5-8 5s-8-2.25-8-5z"/>
  </svg>
);

// React icon
const ReactIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.202 23 20.404" fill="none" stroke="currentColor" strokeWidth="2.0" transform="scale(0.8)">
    <circle cx="0" cy="0" r="2.0" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5" transform="rotate(0)"/>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"/>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"/>
    </g>
  </svg>
);

// Git / GitHub icon
const GitIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.115.82-.265.82-.595 0-.295-.01-1.085-.016-2.005-3.338.724-4.042-1.61-4.042-1.61C4.42 18.06 3.633 17.7 3.633 17.7c-1.087-.736.084-.722.084-.722 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.77.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3.96.96-.268 1.98-.39 3-.39-.023.08-.035.153-.045.228-.008.058-.008.068-.008.077 0 .855.27 1.638.73 2.238-2.39.26-4.34 1.2-5.18 3.55.51-.515 1.23-1.025 2.1-1.425.87-.4 1.81-.625 2.825-.625 4.315 0 7.796 3.48 7.796 7.796 0 4.314-3.48 7.796-7.796 7.796-4.316 0-7.796-3.482-7.796-7.796 0-2.48.92-4.73 2.42-6.49-.69-.58-1.54-.92-2.52-1.07.72-.88 1.77-1.4 3.02-1.4.155.02.31.04.465.065-2.115.77-3.6 2.82-3.6 5.175 0 2.2.89 4.2 2.34 5.65.65.65 1.5 1.04 2.47 1.04.97 0 1.81-.39 2.47-1.04 1.45-1.45 2.34-3.45 2.34-5.65-.005-2.35-1.49-4.38-3.6-5.175.155-.02.31-.04.465-.065 1.25 0 2.3-.52 3.02-1.4-.98.15-1.83.49-2.52 1.07 1.5 1.76 2.42 4 2.42 6.49 0 6.63-5.373 12-12 12S0 18.928 0 12.297c0-6.627 5.373-12 12-12z" clipRule="evenodd"/>
  </svg>
);

// Postman icon
const PostmanIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z"/>
  </svg>
);

// Server/Deployment icon (Node, Express, MERN, Netlify/Vercel/Render)
const ServerIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 14h16V6H4v12zm10-5h2v2h-2v-2zm-6 0h2v2H8v-2zm10-4h2v2h-2v-2zm-6 0h2v2h-2v-2z"/>
  </svg>
);

// Fallback/Checkmark icon
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);

// --- End Inline SVG Icon Definitions ---


// --- Skill-to-Icon Mapping Function ---
// Modified to accept a colorClass for dynamic icon styling on hover
const getSkillIcon = (skillName, colorClass = 'text-primary') => {
  // Pass the color style dynamically to the SVG component
  const iconProps = { size: 18, className: `me-1 ${colorClass}` }; 
  const normalizedName = skillName.toLowerCase().replace(/[.\s\(\)\/+-]/g, '');

  // Default icons for stability
  const CodeDefault = <CodeIcon {...iconProps} />;
  const ServerDefault = <ServerIcon {...iconProps} />;
  const CheckDefault = <CheckIcon {...iconProps} />;

  switch (normalizedName) {
    case 'reactjs': return <ReactIcon {...iconProps} />;
    case 'nodejs': return ServerDefault;
    case 'expressjs': return ServerDefault;
    case 'nextjs': return CodeDefault;
    case 'bootstrap': return CodeDefault;
    case 'restfulapis': return CodeDefault;

    case 'javascriptes6': return CodeDefault;
    case 'html5css3': return CodeDefault;
    case 'c': return CodeDefault;
    case 'php': return CodeDefault;
    case 'python': return CodeDefault;
    case 'java': return CodeDefault;
    case 'dsa': return CodeDefault; // DSA icon replaced with CodeDefault
    case 'mernstack': return ServerDefault;

    case 'mongodb': return <DatabaseIcon {...iconProps} />;
    case 'mysql': return <DatabaseIcon {...iconProps} />;

    case 'gitgithub': return <GitIcon {...iconProps} />;
    case 'vscode': return CodeDefault;
    case 'postman': return <PostmanIcon {...iconProps} />;
    case 'netlifyvercelrender': return ServerDefault;

    default: return CheckDefault;
  }
};

// --- New Component for Hover Effect ---
const SkillPill = ({ skill }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Conditionally apply classes for hover effect
  const iconColorClass = isHovered ? 'text-white' : 'text-primary';
  const pillClasses = isHovered 
    ? "bg-primary text-white shadow-lg border-primary scale-105" // Hover style
    : "bg-light text-dark shadow-sm border-secondary"; // Default style
    
  return (
    <span 
      className={`badge rounded-pill d-flex align-items-center py-2 px-3 fw-normal cursor-pointer ${pillClasses}`}
      style={{ 
        fontSize: '0.85rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out', // Smooth transition
        transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Slight scale effect
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getSkillIcon(skill, iconColorClass)}
      {skill}
    </span>
  );
};


const coreSkills = [
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "Bootstrap", "RESTful APIs", "Partical js"]
  },
  {
    category: "Languages & Concepts",
    skills: ["JavaScript (ES6+)", "HTML5 / CSS3", "C", "Python", "PHP", "Java", "DSA", "MERN Stack"]
  },
  {
    category: "Databases",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools & Platforms",
    skills: ["AWS", "AWS Amplify", "Git / GitHub", "VS Code", "Postman", "Docker", "Netlify / Vercel / Render"]
  },
];

const Skills = () => {
  return (
    <section className="py-5 py-md-5">
      <Container>
        {/* REVERTED: Restoring the heading to use the inline CodeIcon */}
        <h2 className="text-center mb-5 d-flex align-items-center justify-content-center">
          <SiCodepen size={35} className="me-2 text-primary" style={{ verticalAlign: 'middle' }} /> 

          Technical Skills
        </h2>

        <Row className="justify-content-center">
          {coreSkills.map((skillGroup, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary mb-3 fw-bold">{skillGroup.category}</Card.Title>

                  {/* START: Pill/Badge Layout */}
                  <div className="d-flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      // Now using the new SkillPill component for hover effect
                      <SkillPill key={skillIndex} skill={skill} />
                    ))}
                  </div>
                  {/* END: Pill/Badge Layout */}
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
