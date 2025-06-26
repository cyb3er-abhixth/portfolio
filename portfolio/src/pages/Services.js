import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and modern web applications using React, HTML5, CSS3, and JavaScript. Creating seamless user experiences with attention to performance and accessibility.",
      icon: "💻",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      title: "Frontend Development",
      description:
        "Crafting beautiful user interfaces with modern frameworks and libraries. Implementing responsive designs and ensuring cross-browser compatibility.",
      icon: "🎨",
      skills: [
        "UI/UX Implementation",
        "Component Development",
        "State Management",
        "CSS Frameworks",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Developing robust server-side applications with focus on scalability and performance. Creating RESTful APIs and handling database operations.",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Database Management"],
    },
    {
      title: "Database Management",
      description:
        "Designing and managing databases, ensuring data integrity and optimal performance. Working with both SQL and NoSQL databases.",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Database Design"],
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces with modern design principles. Focusing on user experience and interface aesthetics.",
      icon: "✨",
      skills: [
        "Figma",
        "Responsive Design",
        "User Experience",
        "Interface Design",
      ],
    },
    {
      title: "Version Control & Deployment",
      description:
        "Managing code versions and collaborating using Git. Deploying applications to various platforms and maintaining deployment pipelines.",
      icon: "🚀",
      skills: ["Git", "GitHub", "Deployment", "CI/CD"],
    },
  ];

  return (
    <section className="services-page">
      <div className="services-container">
        <h1 data-aos="fade-down" data-aos-duration="1500">
          My Services
        </h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay={200 * (index + 1)}
            >
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="skills-container">
                {service.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
