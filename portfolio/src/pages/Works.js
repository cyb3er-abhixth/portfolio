import React from "react";
import "./Works.css";
import todoAppPreview from "../images/project-images/Screenshot 2025-06-19 174726.png";
import portfolioPreview from "../images/project-images/Screenshot 2025-06-19 174340.png";

const Works = () => {
  return (
    <section className="works-page">
      <div className="works-container">
        <h1 data-aos="fade-down" data-aos-duration="1500">
          My Works
        </h1>

        <div className="works-grid">
          {/* Todo App Project */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <div className="project-image">
              <img
                src={todoAppPreview}
                alt="Todo App Preview"
                className="project-preview"
              />
            </div>
            <h2>Todo App</h2>
            <p className="project-description">
              My Todo App is a task management app designed to help users stay
              organized and focused on their daily tasks and goals. With a clean
              and intuitive interface, this app provides a simple yet effective
              way to create, manage, and track tasks.
            </p>

            <div className="project-details">
              <div className="tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                  <li>React</li>
                </ul>
              </div>

              <div className="roles">
                <h3>My Role</h3>
                <ul>
                  <li>Full Stack Development</li>
                  <li>UI Engineer</li>
                </ul>
              </div>

              <div className="challenges">
                <h3>Challenges & Solutions</h3>
                <p>
                  I faced many debugging challenges and solved them by referring
                  documents and contacting the steyp support panel where the
                  engineers helped me resolve the issues.
                </p>
              </div>
            </div>

            <div className="project-links">
              <a
                href="https://cyb3er-abhixth.github.io/Todo-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-project"
              >
                View Project <span>→</span>
              </a>
            </div>
          </div>

          {/* Portfolio Website Project */}
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            <div className="project-image">
              <img
                src={portfolioPreview}
                alt="Portfolio Website Preview"
                className="project-preview"
              />
            </div>
            <h2>Portfolio Website</h2>
            <p className="project-description">
              A modern, responsive portfolio website showcasing my journey,
              skills, and projects. Built with React and featuring smooth
              animations, this website demonstrates my frontend development
              skills and design sensibilities.
            </p>

            <div className="project-details">
              <div className="tech-stack">
                <h3>Tech Stack</h3>
                <ul>
                  <li>React</li>
                  <li>CSS3</li>
                  <li>Animate On Scroll</li>
                </ul>
              </div>

              <div className="roles">
                <h3>My Role</h3>
                <ul>
                  <li>Frontend Development</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>

              <div className="challenges">
                <h3>Key Features</h3>
                <ul>
                  <li>Responsive Design</li>
                  <li>Smooth Animations</li>
                  <li>Modern UI/UX</li>
                </ul>
              </div>
            </div>

            <div className="project-links">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="view-project"
              >
                View Project <span>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="works-more-projects">
          <p>
            <strong>AND MANY MANY MORE</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Works;
