// src/pages/About.js
import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-page">
      <div className="about-container">
        <h1 data-aos="fade-down" data-aos-duration="1500">
          My Journey with Steyp
        </h1>

        <div
          className="about-section"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>What Steyp Program I Joined</h2>
          <p>
            I first discovered Steyp through a friend at school. The program
            caught my interest because it offered hands-on learning in
            programming and technology. After exploring the courses, I decided
            to join the one-year course.
          </p>
        </div>

        <div
          className="about-section"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>What Steyp Taught Me</h2>
          <p>
            Throughout my time at Steyp, I gained valuable{" "}
            <span className="highlight-text">technical skills</span> that
            significantly improved my coding abilities. I learned programming
            languages, explored web development, and worked on practical
            projects that helped me understand real-world applications of
            coding. The program also introduced me to essential tools like Git,
            frameworks, and debugging techniques, which made me more confident
            in my development journey.
          </p>
        </div>

        <div
          className="about-section"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>Challenges I Faced</h2>
          <p>
            Like any learning experience, Steyp came with its challenges. One of
            the biggest hurdles for me was debugging code. However, with the
            help of mentors, peers, the support section inbuilt within the steyp
            platform, and continuous practice, I was able to overcome these
            difficulties. The hands-on projects and collaborative learning
            environment pushed me to think critically and find solutions.
          </p>
        </div>

        <div
          id="personal-growth"
          className="about-section"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2>Personal Growth</h2>
          <p>
            Being part of Steyp has had a huge impact on my growth as a
            developer. It has strengthened my problem-solving skills, improved
            my confidence in writing code, and given me the motivation to keep
            learning new technologies. This experience has also helped me refine
            my career goals—I now aspire to become a{" "}
            <span className="highlight-text">full-stack developer</span>.
          </p>
        </div>

        <div
          className="about-section conclusion"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <p>
            Overall, my journey with Steyp has been a rewarding one, and I'm
            excited to continue learning and building new projects!{" "}
            <span className="emoji">🚀</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
