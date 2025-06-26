// src/pages/Skills.js
import React from "react";
import "aos/dist/aos.css";
import "./Skills.css";

// Import all SVG logos
import html5Logo from "../images/html5.svg";
import css3Logo from "../images/css3.svg";
import javascriptLogo from "../images/javascript.svg";
import jqueryLogo from "../images/jquery.svg";
import sassLogo from "../images/sass.svg";
import reactLogo from "../images/react.svg";
import tailwindcssLogo from "../images/tailwindcss.svg";
import pythonLogo from "../images/python.svg";
import djangoLogo from "../images/django.svg";
import mysqlLogo from "../images/mysql.svg";
import postgresqlLogo from "../images/postgresql.svg";
import sqliteLogo from "../images/sqlite.svg";
import supabaseLogo from "../images/supabase.svg";
import nextdotjsLogo from "../images/nextdotjs.svg";
import githubLogo from "../images/github.svg";
import figmaLogo from "../images/figma.svg";
import postmanLogo from "../images/postman.svg";
import bootstrapLogo from "../images/bootstrap.svg";
import webHostingLogo from "../images/web-hosting.png";
import vscodeLogo from "../images/vscode.svg";

const skillsData = [
  {
    category: "Front End Development",
    icon: "💻",
    description:
      "Creating responsive and interactive user interfaces using modern frameworks and best practices.",
    skills: [
      { name: "HTML", logo: html5Logo },
      { name: "CSS", logo: css3Logo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "jQuery", logo: jqueryLogo },
      { name: "Sass", logo: sassLogo },
    ],
  },
  {
    category: "Back End Development",
    icon: "🛠️",
    description:
      "Building robust server-side applications and APIs for scalable solutions.",
    skills: [
      { name: "Python", logo: pythonLogo },
      { name: "Django", logo: djangoLogo },
    ],
  },
  {
    category: "Database Management",
    icon: "🗄️",
    description:
      "Designing, managing, and optimizing efficient databases for data-driven apps.",
    skills: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgresqlLogo },
      { name: "SQLite3", logo: sqliteLogo },
      { name: "Supabase", logo: supabaseLogo },
    ],
  },
  {
    category: "Web Applications",
    icon: "🌐",
    description:
      "Developing modern web applications with the latest technologies.",
    skills: [{ name: "Next.js", logo: nextdotjsLogo }],
  },
  {
    category: "Development Tools",
    icon: "⚙️",
    description: "Essential tools for modern development and collaboration.",
    skills: [
      { name: "GitHub", logo: githubLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    category: "DevOps Engineering",
    icon: "☁️",
    description:
      "Managing deployment, hosting, and cloud infrastructure for scalable applications.",
    skills: [{ name: "Web Hosting", logo: webHostingLogo }],
  },
  {
    category: "Mobile Application Development",
    icon: "📱",
    description:
      "Building cross-platform mobile applications with modern frameworks.",
    skills: [{ name: "React Native", logo: reactLogo }],
  },
  {
    category: "Tools/Platforms",
    icon: "🛠️",
    description:
      "Essential tools and platforms for modern development and collaboration.",
    skills: [
      { name: "Supabase", logo: supabaseLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "VSCode", logo: vscodeLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h1
          className="skills-title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My <span>Skills</span>
        </h1>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div
              key={category.category}
              className="skill-category enhanced"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="category-header">
                <span className="category-icon" aria-label="icon">
                  {category.icon}
                </span>
                <h2>{category.category}</h2>
              </div>
              <p className="category-description">{category.description}</p>
              <div className="skills-list">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item enhanced">
                    <div className="skill-icon">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
