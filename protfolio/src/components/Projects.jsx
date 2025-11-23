import { Container, Row, Col, Card, Button } from "react-bootstrap";
import bus from "../assets/bus.png";
import clg from "../assets/clg.png";
import catering from "../assets/catering.png";
import ecommerceImg from "../assets/furniture.png";
import weatherImg from "../assets/weather.png";
import dietPlannerImg from "../assets/diet.png";

import { useState } from "react";
import { SiGitkraken } from "react-icons/si";



function Projects() {
  const projects = [
    {
      title: "AI Smart Budget Diet Planner",
      stack: "React, Node.js (Express), Google Gemini API, Bootstrap",
      desc: (
        <>
          <ul>
            <li>Developed an AI-powered meal planner that generates 7-day plans based on complex user constraints.</li>
            <li>Integrated the <span className='fw-bold'>Google Gemini API</span> for complex reasoning and structured JSON output.</li>
            <li>Built a secure <span className='fw-bold'>Node.js (Express) proxy</span> to protect API keys and manage requests.</li>
            <li>Handled strict constraints for Budget (INR), Regional Indian Cuisine, and Allergies.</li>
            <li>Designed a dynamic <span className='fw-bold'>Glassmorphism UI</span> with a Particles.js background.</li>
          </ul>
        </>
      ),
      demoLink: "https://ai-diet-planner-nmjj.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/Smart-Budget-Diet-Planner",
      img: dietPlannerImg,
    },

    {
      title: "MERN Stack Buses Listing with OTP Authentication",
      stack: "MERN Stack, Bootstrap",
      desc: (
        <>
          <ul>
            <li>Built a secure, city-based service listing platform using the <span className='fw-bold'>MERN Stack</span>.</li>
            <li>Implemented <span className='fw-bold'>OTP-based authentication</span> and an admin-approval system for listings.</li>
            <li>Designed a responsive and <span className='fw-bold'>SEO-friendly UI</span> with Bootstrap.</li>
            <li>Integrated a real-time <span className='fw-bold'>WhatsApp CTA</span> for immediate user contact.</li>
            <li>Planned monetization features for paid listing placements.</li>
          </ul>
        </>
      ),
      demoLink: "https://touristbus.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/tourist_bus",
      img: bus,
    },

    {
      title: "MERN Marketplace for Catering Professionals",
      stack: "MERN Stack, Bootstrap",
      desc: (
        <>
          <ul>
            <li>Designed a <span className='fw-bold'>MERN stack marketplace</span> to connect catering professionals with event organizers.</li>
            <li>Featured secure user authentication and profile management for vendors.</li>
            <li>Implemented a <span className='fw-bold'>star-rating and review system</span> for vendor credibility.</li>
            <li>Included a real-time <span className='fw-bold'>WhatsApp CTA</span> for faster hiring.</li>
            <li>Developed a responsive UI for browsing catering services.</li>
          </ul>
        </>
      ),
      demoLink: "https://cateringboys0.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/catring_project_rebirth",
      img: catering,
    },

    {
      title: "Full-Stack MERN E-Commerce Platform",
      stack: "MERN Stack, Prisma ORM, Bootstrap, JWT",
      desc: (
        <>
          <ul>
            <li>Built a full-stack <span className='fw-bold'>MERN E-Commerce platform</span> with <span className='fw-bold'>Prisma ORM</span>.</li>
            <li>Implemented complex <span className='fw-bold'>Role-Based Authentication</span>.</li>
            <li>Includes dashboards for product, order, and user management.</li>
            <li>Features <span className='fw-bold'>Reviews & Ratings</span> and live order tracking.</li>
            <li>Secured with JWT + Protected Routes.</li>
          </ul>
        </>
      ),
      demoLink: "https://furniture-qqlv.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/furniture",
      img: ecommerceImg,
    },

    {
      title: "Lead-Developed University Website (PHP/MySQL)",
      stack: "PHP, MySQL, HTML, CSS, Bootstrap",
      desc: (
        <>
          <ul>
            <li>Lead Developer for the official university website (aucetk.edu.in).</li>
            <li>Engineered backend using <span className='fw-bold'>PHP & MySQL</span>.</li>
            <li>Created database-driven event & announcement system.</li>
            <li>Built full-featured <span className='fw-bold'>Admin Panel</span>.</li>
            <li>Integrated grievance redressal portal.</li>
          </ul>
        </>
      ),
      demoLink: "https://www.aucetk.edu.in/",
      codeLink: "https://www.aucetk.edu.in/pages/web.html",
      img: clg,
    },

    {
      title: "AI Weather App with Spline Robot",
      stack: "React (TypeScript), OpenWeather API, Bootstrap, Spline 3D",
      desc: (
        <>
          <ul>
            <li>AI weather UI with dynamic backgrounds and a 3D Spline robot.</li>
            <li>Live weather using <span className='fw-bold'>OpenWeather API</span>.</li>
            <li>Glassmorphism UI with Bootstrap Modals.</li>
          </ul>
        </>
      ),
      demoLink: "https://weather-app-6hoj.onrender.com/",
      codeLink: "https://github.com/Gowthamkvdl/weather_app",
      img: weatherImg,
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Show only first 3 or all
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-5 project-sec">
      <Container>
        <h2 className="text-center mb-5 d-flex align-items-center justify-content-center">
          <SiGitkraken size={35} className="me-2 text-primary" />
          Projects
        </h2>

        <Row className="justify-content-center">
          {displayedProjects.map((p, idx) => (
            <Col md={4} key={idx} className="mb-3">
              <Card
                className="h-100 shadow-sm border-0"
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <Card.Body>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="card-img-top rounded-top-4"
                    style={{
                      transition: "transform 0.4s ease, filter 0.3s ease",
                      transform: hoverIndex === idx ? "scale(1.08)" : "scale(1)",
                      filter: hoverIndex === idx ? "brightness(1.1)" : "brightness(1)",
                    }}
                  />

                  <Card.Title className="mt-4 fw-bold">{p.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-primary small">
                    {p.stack}
                  </Card.Subtitle>

                  <Card.Text className="mb-4">{p.desc}</Card.Text>

                  <div className="d-flex justify-content-end">
                    {/* Code / Web Team */}
                    <Button
                      variant="dark"
                      href={p.codeLink}
                      className={`me-2 ${p.demoLink === "https://www.aucetk.edu.in/" ? "d-none" : ""}`}
                      target="_blank"
                    >
                      View Code
                    </Button>
                    <Button
                      variant="dark"
                      href={p.codeLink}
                      className={`me-2 ${p.demoLink === "https://www.aucetk.edu.in/" ? "" : "d-none"}`}
                      target="_blank"
                    >
                      Web Team
                    </Button>

                    <Button variant="primary" href={p.demoLink} target="_blank">
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {/* More / Show Less Button */}
          <Col md={12} className="text-center mt-3">
            {!showAll ? (
              <Button variant="outline-primary" size="sm" onClick={() => setShowAll(true)}>
                Show More Projects
              </Button>
            ) : (
              <Button variant="outline-secondary" size="sm" onClick={() => setShowAll(false)}>
                Show Less
              </Button>
            )}
          </Col>

          {/* GitHub Button Only When Expanded */}
          {showAll && (
            <Col md={12} className="text-center mt-2">
              <Button
                variant="outline-dark"
                size="sm"
                href="https://github.com/gowthamkvdl?tab=repositories"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="me-1 bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>View All Projects on GitHub
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
