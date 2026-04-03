import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import cert from "../assets/certificate.jpeg"
import event from "../assets/event-pic.jpeg"
import "./Hero.css"

function Hero() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = 'auto';
  };

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeFullscreen();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section className="hero-section">
      <Container className="hero-container">
        <div className="hero-wrapper">
          {/* LEFT SIDE - CONTENT */}
          <div className="hero-content">
            {/* Main Headline */}
            <div className="hero-header">
              <h1 className="hero-title">
                Hi, I'm <span className="accent">Gowtham</span>
              </h1>
              <div className="accent-line"></div>
            </div>

            {/* Subtitle */}
            <h2 className="hero-subtitle">Full-Stack Developer</h2>
            <p className="hero-description">Crafting scalable solutions with modern technology</p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <Button
                className="download-btn"
                href="https://drive.google.com/file/d/1_zqXHZpRzBOiE9qHd59zh1CRCvD288OA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a 
                href="mailto:gowthamofficial7010@gmail.com" 
                className="social-icon"
                title="Email"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </a>

              <a 
                href="https://linkedin.com/in/gowthamkvdl" 
                target="_blank" 
                className="social-icon"
                title="LinkedIn"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>

              <a 
                href="https://github.com/gowthamkvdl" 
                target="_blank" 
                className="social-icon"
                title="GitHub"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>

              <a 
                href="https://leetcode.com/u/gowthamkvdl/" 
                target="_blank" 
                className="social-icon"
                title="LeetCode"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - PHOTO ALBUM */}
          <div className="hero-gallery-section">
            <div className="photo-album">
              <div className="album-stack">
                {/* Bottom Right - Event */}
                <div className="album-item item-4">
                  <div 
                    className="album-card clickable"
                    onClick={() => openFullscreen(event)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && openFullscreen(event)}
                  >
                    <img src={event} alt="University Event" />
                    <div className="album-label">Achievement</div>
                    <div className="fullscreen-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Top Right - Abstract 1 */}
                <div className="album-item item-2">
                  <div className="album-card">
                    <div className="abstract-bg bg-1">
                      <div className="abstract-shape shape-circle"></div>
                      <div className="abstract-shape shape-square"></div>
                    </div>
                    <div className="album-label">Tech</div>
                  </div>
                </div>

                {/* Bottom Left - Abstract 2 */}
                <div className="album-item item-3">
                  <div className="album-card">
                    <div className="abstract-bg bg-2">
                      <div className="abstract-shape shape-triangle"></div>
                      <div className="abstract-shape shape-line"></div>
                    </div>
                    <div className="album-label">Design</div>
                  </div>
                </div>
                {/* Top Left - Certificate */}
                <div className="album-item item-1">
                  <div 
                    className="album-card clickable"
                    onClick={() => openFullscreen(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && openFullscreen(cert)}
                  >
                    <img src={cert} alt="Certificate of Excellence" />
                    <div className="album-label">Excellence</div>
                    <div className="fullscreen-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FULLSCREEN MODAL */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={closeFullscreen}
              aria-label="Close fullscreen"
              title="Close (or press Esc)"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={fullscreenImage} alt="Fullscreen view" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;