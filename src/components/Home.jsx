import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {

  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      <header>
        <h1>Tejas Navale</h1>
        <h2>Full Stack Web Developer</h2>
      </header>

      <section className="intro">
        <div className="profile-image">
          <img src="betterImage.jpg" alt="Tejas Navale" />
        </div>
        <p>
          Welcome to my portfolio! I'm a passionate full stack developer 
          specializing in MERN stack technologies. With a keen eye for detail 
          and a love for clean, efficient code, I build robust and scalable 
          web applications.
        </p>
      </section>

      <section className="experience">
        <h3>Professional Experience</h3>
        <ul>
          <li>
            <strong>Internship at CodSoft</strong>
            <p>Developed responsive web applications using React and Node.js</p>
          </li>
          <li>
            <strong>Internship at RK Group of IT Solution</strong>
            <p>Contributed to full-stack projects, focusing on database optimization and API development</p>
          </li>
        </ul>
      </section>

      <section className="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)</li>
          <li> Css Framework : Tailwind , Bootstrap , Figma </li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB, MySQL , PostgreSQL , Firebase</li>
          <li>Tools & Technologies: Git & Github , RESTful APIs , ReduxJS </li>
          <li>Cloud Services: Heroku </li>
        </ul>
      </section>

      <section className="about">
        <h3>About Me</h3>
        <p>
          As a dedicated full stack developer, I thrive on turning complex 
          problems into simple, beautiful, and intuitive solutions. My 
          experience with the MERN stack allows me to develop efficient, 
          scalable, and user-friendly web applications from concept to deployment.
        </p>
        <p>
          I'm constantly learning and keeping up with the latest trends in web 
          development. My goal is to create impactful digital experiences that 
          make a difference in people's lives.
        </p>
      </section>

      <section className="cta">
        <h3>Let's Connect!</h3>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to 
          explore my projects and get in touch if you'd like to work together or 
          just chat about web development!
        </p>
        <button onClick={handleProjectsClick}>View My Projects</button>
        <button onClick={handleContactClick}>Contact Me</button>
      </section>
    </div>
  );
}

export default Home;