// src/pages/Home.js
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css"; // Ensure this file exists
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const textElements = useRef(null);
  const typeWriterRef = useRef();
  const eraseTextRef = useRef();
  const textIndexRef = useRef(0);
  const characterIndexRef = useRef(0);
  const navigate = useNavigate();

  const texts = useMemo(
    () => [
      "Web Developer",
      "Web Designer",
      "UI/UX Designer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
    []
  );

  const speed = 100;

  typeWriterRef.current = () => {
    if (characterIndexRef.current < texts[textIndexRef.current].length) {
      if (textElements.current) {
        textElements.current.innerHTML += texts[textIndexRef.current].charAt(
          characterIndexRef.current
        );
      }
      characterIndexRef.current += 1;
      setCharacterIndex(characterIndexRef.current);
      setTimeout(typeWriterRef.current, speed);
    } else {
      setTimeout(eraseTextRef.current, 1000);
    }
  };

  eraseTextRef.current = () => {
    if (textElements.current && textElements.current.innerHTML.length > 0) {
      textElements.current.innerHTML = textElements.current.innerHTML.slice(
        0,
        -1
      );
      setTimeout(eraseTextRef.current, 50);
    } else {
      textIndexRef.current = (textIndexRef.current + 1) % texts.length;
      characterIndexRef.current = 0;
      setTextIndex(textIndexRef.current);
      setCharacterIndex(0);
      setTimeout(typeWriterRef.current, 500);
    }
  };

  useEffect(() => {
    AOS.init({ offset: 0 });
    if (textElements.current) textElements.current.innerHTML = "";
    characterIndexRef.current = 0;
    textIndexRef.current = 0;
    setCharacterIndex(0);
    setTextIndex(0);
    setTimeout(typeWriterRef.current, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      <div className="main-container">
        {" "}
        <div className="image" data-aos="zoom-out" data-aos-duration="3000">
          <img
            src={require("../images/WhatsApp Image 2024-12-17 at 19.41.25_ceb25d7f.jpg")}
            alt="Abhinav Arun"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "inherit",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
        <div className="content">
          <h1
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="700"
            style={{ fontSize: "2.8rem", fontWeight: 700 }}
          >
            Hey I'm <span>Abhinav Arun</span>
          </h1>
          <div
            className="typewriter"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="900"
            style={{
              fontSize: "2rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
            }}
          >
            I'm a <span className="typewriter-text" ref={textElements}></span>
            <label>|</label>
          </div>
          <p
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-delay="1100"
            style={{ marginBottom: "1.5rem" }}
          >
            My journey into development started at Steyp, where I first learned
            basic programming languages like HTML, CSS etc. I began with the
            basics, mastering languages like Python and JavaScript, and
            gradually expanded my skills to web development, and algorithms. As
            I gained experience, I worked on real-world projects, improving my
            problem-solving abilities and understanding of software development.
          </p>
          <p
            data-aos="flip-down"
            data-aos-duration="1500"
            data-aos-delay="1200"
            style={{ marginBottom: "1.5rem" }}
          >
            Along the way, I kept learning new technologies, refining my coding
            skills, and building projects that showcased my growth as a
            developer.
          </p>
          <div
            className="btn"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="1800"
          >
            <button className="skills-btn" onClick={() => navigate("/skills")}>
              Skills
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
