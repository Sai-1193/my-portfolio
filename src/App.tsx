// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaUser,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaJava,
//   FaAngular,
//   FaDocker,
//   FaAws,
//   FaTools,
//   FaGraduationCap,
//   FaCertificate,
//   FaStar,
//   FaHeart,
// } from "react-icons/fa";
// import {
//   SiSpringboot,
//   SiKubernetes,
//   SiGooglecloud,
//   SiTerraform,
//   SiReact,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const Navbar = () => (
//   <nav
//     style={{
//       backgroundColor: "#1f2937",
//       padding: "1rem",
//       position: "fixed",
//       width: "100%",
//       top: 0,
//       zIndex: 999,
//     }}
//   >
//     <ul
//       style={{
//         display: "flex",
//         gap: "1rem",
//         listStyle: "none",
//         color: "white",
//         margin: 0,
//         justifyContent: "center",
//       }}
//     >
//       {[
//         ["About", "/"],
//         ["Tech Stack", "/tech"],
//         ["Projects", "/projects"],
//         ["Experience", "/experience"],
//         ["Blog", "/blog"],
//         ["Interests", "/interests"],
//         ["Books", "/books"],
//       ].map(([label, path]) => (
//         <li key={label}>
//           <Link
//             to={path}
//             style={{ color: "white", textDecoration: "none", fontWeight: 600 }}
//           >
//             {label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

// const Hero = () => (
//   <section
//     style={{
  
//     minHeight: "80vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background:
//       "linear-gradient(rgba(31, 41, 55, 0.85), rgba(31, 41, 55, 0.85)), url(https://wallpaperaccess.com/full/2637581.jpg)",
//     backgroundSize: "cover",
//     color: "white",
//     paddingTop: 80,
//     paddingLeft: "1rem",
//     paddingRight: "1rem",
//     }}
//   >
//     <motion.h1
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       style={{ fontSize: "3rem", marginBottom: "1rem" }}
//     >
//       Hi, I am Sai Kavya Katta
//     </motion.h1>
//     <motion.p
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.3, duration: 0.8 }}
//       style={{ fontSize: "1.5rem", maxWidth: 600 }}
//     >
//       Full Stack Developer specializing in scalable microservices & cloud
//       native apps with Java, Spring Boot, and DevOps.
//     </motion.p>
//   </section>
// );

// const About = () => (
//     <section style={{ minHeight: "80vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", background: "#111827", color: "white", paddingTop: 50, paddingLeft: "1rem", paddingRight: "1rem", gap: "3rem", flexWrap: "wrap" }}>
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
//       <img src="/test4.jpeg" alt="Profile" style={{ borderRadius: "50%", border: "4px solid white", width: 200, height: 200, objectFit: "cover", marginBottom: 20 }} />
//         <div style={{ display: "flex", alignItems: "center", gap: 8, margin: 4 }}><FaUser /> <span>Full Stack Developer</span></div>
//         <div style={{ display: "flex", alignItems: "center", gap: 8, margin: 4 }}><FaEnvelope /> <span>katta.saikavya@gmail.com</span></div>
//         <div style={{ display: "flex", alignItems: "center", gap: 8, margin: 4 }}><FaPhoneAlt /> <span>+1 (216) 356-1021</span></div>
//     </div>
//     <div style={{ flex: 1, maxWidth: 600 }}>
//       <p style={{ fontSize: "1.1rem", marginBottom: 20 }}>
//         🚀 I specialize in building scalable microservices and cloud-native applications using Java, Spring Boot, and modern DevOps practices. Passionate about clean architecture, performance tuning, and cross-functional collaboration.
//       </p>
//       <h3 style={{ marginBottom: 8 }}>Career Highlights:</h3>
//       <ul style={{ marginBottom: 24 }}>
//         <li>Reduced application load time by 40% by refactoring legacy code</li>
//         <li>Led a team of 4 developers to deliver a fintech MVP in 3 months</li>
//         <li>Migrated on-premise workloads to GCP, saving $10K/year in infra costs</li>
//       </ul>
//       <h3 style={{ marginBottom: 8 }}>Education:</h3>
//       <ul>
//         <li>M.S. in Computer Science, Cleveland State University</li>
//         <li>B.Tech in Information Technology, JNTU Hyderabad</li>
//       </ul>
//     </div>
//   </section>
   
//   );

// const CardSlider = () => {
//   const cards = [
//     {
//       title: "Career Highlights",
//       content: [
//         "Reduced application load time by 40% by refactoring legacy code",
//         "Led a team of 4 developers to deliver a fintech MVP in 3 months",
//         "Migrated on-premise workloads to GCP, saving $10K/year in infra costs",
//       ],
//       icon: <FaStar />,
//     },
//     {
//       title: "Certifications",
//       content: [
//         "AWS Certified Solutions Architect – Associate",
//         "Certified Kubernetes Administrator (CKA)",
//         "Terraform Associate – HashiCorp",
//       ],
//       icon: <FaCertificate />,
//     },
//     {
//       title: "Education",
//       content: [
//         "M.S. in Computer Science, Cleveland State University",
//         "B.Tech in Information Technology, JNTU Hyderabad",
//       ],
//       icon: <FaGraduationCap />,
//     },
//     {
//       title: "Personal Interests",
//       content: [
//         "🧘 Yoga enthusiast",
//         "📚 Avid reader of sci-fi novels",
//         "🎨 Aspiring digital artist",
//       ],
//       icon: <FaHeart />,
//     },
//   ];

//   const [current, setCurrent] = useState(0);


//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((c) => (c + 1) % cards.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <section
//       style={{
//         background:
//         "linear-gradient(rgba(31, 41, 55, 0.85), rgba(31, 41, 55, 0.85)), url(https://wallpaperaccess.com/full/2637581.jpg)",
//       backgroundSize: "cover",

//         color: "white",
//         padding: "3rem 1rem",
//         maxWidth: "100%",
//         margin: "0 auto 3rem",
//         borderRadius: 12,
//         textAlign: "center",
//         display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",  paddingTop: 50, paddingLeft: "1rem", paddingRight: "1rem", gap: "6rem", flexWrap: "wrap"
//       }}
//     >
//       <motion.div
//         key={cards[current].title}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -30 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3
//           style={{
//             fontSize: "1.8rem",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "0.5rem",
//             marginBottom: "1rem",
//           }}
//         >
//           {cards[current].icon} {cards[current].title}
//         </h3>
//         <ul style={{ listStyle: "none", paddingLeft: 0 }}>
//           {cards[current].content.map((item, i) => (
//             <li
//               key={i}
//               style={{
//                 marginBottom: 8,
//                 fontSize: "1.1rem",
//               }}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//       {/* <div style={{ marginTop: 16 }}>
//         {cards.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             style={{
//               width: 14,
//               height: 14,
//               borderRadius: "50%",
//               margin: "0 6px",
//               border: "none",
//               cursor: "pointer",
//               backgroundColor: i === current ? "#3b82f6" : "#374151",
//               transition: "background-color 0.3s",
//             }}
//             aria-label={`Show ${cards[i].title}`}
//           />
//         ))}
//       </div> */}
//     </section>
//   );
// };

// const TechStack = () => {
//   const techStack = [
//     { name: "Java", icon: <FaJava /> },
//     { name: "Spring Boot", icon: <SiSpringboot /> },
//     { name: "Angular", icon: <FaAngular /> },
//     { name: "Docker", icon: <FaDocker /> },
//     { name: "Kubernetes", icon: <SiKubernetes /> },
//     { name: "AWS", icon: <FaAws /> },
//     { name: "GCP", icon: <SiGooglecloud /> },
//     { name: "Terraform", icon: <SiTerraform /> },
//     { name: "React", icon: <SiReact /> },
//   ];

//   return (
//     <section
//       id="tech"
//       style={{
//         padding: "3rem 1rem",
//         backgroundColor: "#111827",
//         color: "white",
//         textAlign: "center",
//       }}
//     >
//       <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Tech Stack</h2>
//       <div
//         style={{
//           maxWidth: 900,
//           margin: "0 auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
//           gap: "2rem",
//           justifyItems: "center",
//           fontSize: "3rem",
//         }}
//       >
//         {techStack.map(({ name, icon }) => (
//           <div key={name} style={{ display: "flex", flexDirection: "column" }}>
//             <div
//               style={{
//                 color: "#3b82f6",
//                 fontSize: "3rem",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               {icon}
//             </div>
//             <span style={{ fontSize: "1.2rem", fontWeight: 600 }}>{name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// const Projects = () => {
//   const projects = [
//     {
//       title: "Fintech MVP",
//       description:
//         "Led a team to deliver a financial technology MVP within 3 months, using microservices architecture.",
//       link: "#",
//     },
//     {
//       title: "Cloud Migration",
//       description:
//         "Migrated on-premise workloads to Google Cloud Platform, optimizing costs and scalability.",
//       link: "#",
//     },
//     {
//       title: "Performance Tuning",
//       description:
//         "Reduced legacy application load time by 40% through code refactoring and caching strategies.",
//       link: "#",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       style={{
//         padding: "3rem 1rem",
//         backgroundColor: "#1f2937",
//         color: "white",
//         textAlign: "center",
//       }}
//     >
//       <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Projects</h2>
//       <div
//         style={{
//           maxWidth: 900,
//           margin: "0 auto",
//           display: "flex",
//           gap: "2rem",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {projects.map(({ title, description, link }) => (
//           <motion.a
//             key={title}
//             href={link}
//             target="_blank"
//             rel="noreferrer"
//             style={{
//               backgroundColor: "#374151",
//               borderRadius: 12,
//               padding: "1.5rem",
//               width: 280,
//               textDecoration: "none",
//               color: "white",
//               boxShadow:
//                 "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
//             }}
//             whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(59,130,246,0.4)" }}
//           >
//             <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
//             <p>{description}</p>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// };

// const Contact = () => (
//   <section
//     id="contact"
//     style={{
//       backgroundColor: "#111827",
//       color: "white",
//       padding: "3rem 1rem",
//       textAlign: "center",
//     }}
//   >
//     <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Me</h2>
//     <p>
//       <FaEnvelope /> katta.saikavya@gmail.com
//     </p>
//     <p>
//       <FaPhoneAlt /> +1 (216) 356-1021
//     </p>
//     <div
//       style={{
//         marginTop: 20,
//         display: "flex",
//         justifyContent: "center",
//         gap: "2rem",
//         fontSize: "2rem",
//       }}
//     >
//       <a
//         href="https://github.com/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         style={{ color: "white" }}
//         aria-label="GitHub"
//       >
//         <FaGithub />
//       </a>
//       <a
//         href="https://linkedin.com/in/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         style={{ color: "white" }}
//         aria-label="LinkedIn"
//       >
//         <FaLinkedin />
//       </a>
//       <a
//         href="https://twitter.com/yourusername"
//         target="_blank"
//         rel="noreferrer"
//         style={{ color: "white" }}
//         aria-label="Twitter"
//       >
//         <FaTwitter />
//       </a>
//     </div>
//   </section>
// );

// const App = () => (
//   <Router>
//     <Navbar />
//     <main style={{ paddingTop: 70 }}>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <About />
//             <CardSlider />
//           </>
//         } />
//         <Route path="/tech" element={<TechStack />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/experience" element={<About />} />
//         <Route path="/blog" element={<div style={{ padding: 40, color: "white" }}>Blog coming soon...</div>} />
//         <Route path="/interests" element={<CardSlider />} />
//         <Route path="/books" element={<div style={{ padding: 40, color: "white" }}>Books coming soon...</div>} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </main>
//   </Router>
// );

// export default App;
// Anime-style Portfolio App - Rebuilt to match Abhishek Ganvir's layout
// Required dependencies: react, framer-motion, react-icons, react-simple-typewriter, react-scroll, lottie-react

// Anime-style Portfolio App - Abhishek Ganvir inspired full layout with animation
// Required: react, framer-motion, react-icons, react-scroll, react-simple-typewriter

import React, { JSX, useState } from "react";
import { motion } from "framer-motion";

import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiNodedotjs,
    SiReact,
    SiMongodb,
    SiJsonwebtokens,
    SiPostgresql,
    SiTypescript,
    SiDocker
  } from "react-icons/si";
  
  import {
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaEnvelope
  } from "react-icons/fa";
  

import { useTypewriter } from "react-simple-typewriter";
import { Link, animateScroll as scroll } from "react-scroll";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from 'react-router-dom';
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const cardHover = {
  whileHover: { scale: 1.05, boxShadow: "0 0 20px #7e5bffcc" }
};

const socialHover = {
  whileHover: { scale: 1.3, boxShadow: "0 0 25px #c67affdd" }
};

export default function App() {
  const [text] = useTypewriter({
    words: ["Tech Enthusiast", "Full Stack Developer", "Open to Collaborate"],
    loop: true,
    delaySpeed: 1500,
  });

  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "techstack">("projects");

  const handleCardClick = (tab: "projects" | "certificates" | "techstack") => {
    setActiveTab(tab);
    scroll.scrollTo(document.getElementById("portfolio")!.offsetTop - 80);
  };


  const navigate = useNavigate();
  
  const portfolioItems = [
    { id: '1', title: "IntervueAI", desc: "Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.", demo: "#", details: "#" },
    { id: '2', title: "Blendy", desc: "A social app where you can connect in real-time, log in with one click, share moments, posts instantly.", demo: "#", details: "#" },
    { id: '3', title: "WATCHit", desc: "A video streaming app made for easy, personal entertainment and everything you love to binge.", demo: "#", details: "#" },
    { id: '4', title: "Leafchat", desc: "A chat app with a smooth, natural feel leafy UI, falling leaves, and calming sounds like an autumn breeze.", demo: "#", details: "#" }
  ];

  const certificates = [
    { title: "AWS Cloud Practitioner", link: "#certificate1" },
    { title: "Full Stack Bootcamp", link: "#certificate2" },
    { title: "Data Structures in Java", link: "#certificate3" }
  ];

  const techStack = [
   
    { icon: <SiHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <SiCss3 color="#1572B6" />, label: "CSS" },
    { icon: <SiJavascript color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiTailwindcss color="#38B2AC" />, label: "Tailwind CSS" },
    { icon: <SiExpress color="#000000" />, label: "Express JS" },
    { icon: <SiNodedotjs color="#339933" />, label: "Node JS" },
    { icon: <SiReact color="#61DAFB" />, label: "React + Native" },
    { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
    { icon: <SiJsonwebtokens color="#000000" />, label: "JWT" },
    { icon: <SiPostgresql color="#336791" />, label: "PostgreSQL" },
    { icon: <SiTypescript color="#3178C6" />, label: "TypeScript" },
    { icon: <SiDocker color="#2496ED" />, label: "Docker" },
  ];

  return (
    <Routes>
        <Route path="/" element={
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

        body {
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
          background: radial-gradient(circle at top left, #12132a, #0a0b1d);
          color: white;
          min-height: 100vh;
          scroll-behavior: smooth;
        }
          .tech-pill-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.2rem 0;
}
.tech-pill {
  background: #1e1f36;
  border: 1px solid #7e5bff;
  color: #ddd;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  box-shadow: 0 0 10px #7e5bff44;
  user-select: none;
}
.hero-btn-row {
  margin-top: 1rem;
}
.mini-btn {
  display: inline-block;
  margin-right: 0.8rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  border-radius: 6px;
  background: #2a2b48;
  color: #b0a9ff;
  text-decoration: none;
  transition: background 0.3s ease;
  box-shadow: 0 0 10px #7e5bff55;
}
.mini-btn:hover {
  background: #7e5bff;
  color: white;
}
.social-icons-row {
  margin-top: 1.4rem;
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
}
.social-icons-row a {
  color: #ccc;
  transition: color 0.3s ease;
}
.social-icons-row a:hover {
  color: #7e5bff;
}

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        nav ul {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        nav a {
          text-decoration: none;
          color: #a0a8f0;
          font-weight: 600;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        nav a:hover, nav a.active {
          color: #7e5bff;
        }
        section {
          padding: 4rem 8%;
        }
        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 90vh;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .left h1 {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(to right, #8f7cf6, #c67aff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          user-select: none;
        }
        .typewriter-text {
          font-weight: 600;
          font-size: 1.4rem;
          color: #ddd;
          margin-top: 0.5rem;
          user-select: none;
        }
        .cursor {
          color: #7e5bff;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .description, .about p, .contact p {
          color: #ccc;
          line-height: 1.6;
          max-width: 600px;
          user-select: text;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .stat-card, .project-card {
          background: #1e1f36;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          cursor: pointer;
          user-select: none;
          box-shadow: 0 0 12px #7e5bff55;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover, .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 25px #7e5bff99;
        }
        .project-card h3, .stat-card h2 {
          margin-bottom: 0.5rem;
          user-select: text;
          color: #c6bfff;
          font-weight: 700;
        }
        .stat-card h2 {
          font-size: 3.2rem;
          color: #c6bfff;
        }
        .stat-card p {
          font-weight: 600;
          color: #aaa;
          user-select: text;
        }
        .stat-card small {
          color: #777;
          user-select: text;
        }
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background: #7e5bff;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 1rem;
          user-select: none;
          cursor: pointer;
          transition: background 0.3s ease;
          box-shadow: 0 0 12px #7e5bffbb;
        }
        .btn:hover {
          background: #987eff;
          box-shadow: 0 0 25px #7e5bffaa;
        }
        .contact-form input, .contact-form textarea {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: #15162b;
          border: 1px solid #444;
          color: white;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          resize: vertical;
          user-select: text;
        }
        .socials a {
          font-size: 1.8rem;
          margin: 0 0.75rem;
          color: white;
          border-radius: 50%;
          padding: 0.5rem;
          background: #1e1f36;
          user-select: none;
          box-shadow: 0 0 12px #7e5bff66;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
          color: #999;
          background: #0c0d1a;
          user-select: none;
        }
        /* Tabs */
        .tabs {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          user-select: none;
          justify-content: center;
        }
        .tab {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          border-radius: 8px;
          background: #2a2b48;
          color: #b0a9ff;
          font-weight: 600;
          box-shadow: 0 0 6px transparent;
          transition: all 0.3s ease;
          user-select: none;
        }
        .tab.active {
          background: #7e5bff;
          color: white;
          box-shadow: 0 0 15px #7e5bffaa;
        }
        .tech-icon {
          font-size: 2.5rem;
          margin-bottom: 0.6rem;
          color: white;
          filter: drop-shadow(0 0 5px #7e5bffcc);
        }
        .techstack-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #1e1f36;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          cursor: default;
          box-shadow: 0 0 12px #7e5bff55;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          user-select: text;
        }
        .techstack-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 25px #7e5bffcc;
        }
        /* About Me photo & experience styling */
        .about-wrapper {
          display: flex;
          gap: 2.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0 15px #7e5bffcc;
          border: 4px solid #7e5bff;
          user-select: none;
          flex-shrink: 0;
        }
        .about-text {
          flex: 1;
          min-width: 280px;
          color: #ddd;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        .experience {
          margin-top: 2rem;
          background: #292a4b;
          border-radius: 12px;
          padding: 1.5rem 2rem;
          box-shadow: 0 0 10px #7e5bff44;
        }
        .experience h3 {
          margin-bottom: 1rem;
          color: #c6bfff;
          font-weight: 700;
          font-size: 1.3rem;
          user-select: text;
        }
        .job {
          margin-bottom: 1rem;
          user-select: text;
        }
        .job h4 {
          margin: 0;
          font-weight: 600;
          color: #9ea7ff;
        }
        .job span {
          font-size: 0.9rem;
          color: #bbb;
        }
        .job p {
          margin: 0.3rem 0 0;
          font-size: 0.95rem;
          color: #ccc;
        }
        /* Responsive */
        @media (max-width: 700px) {
          .about-wrapper {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-text {
            min-width: auto;
          }
          .experience {
            text-align: center;
          }
        }
      `}</style>

      <nav>
        <div style={{ fontSize: "1.6rem", fontWeight: "bold", color: "#a87fff" }}>Sai Kavya</div>
        <ul>
          <li><Link to="hero" smooth duration={500} spy offset={-70} activeClass="active">Home</Link></li>
          <li><Link to="about" smooth duration={500} spy offset={-70} activeClass="active">About</Link></li>
          <li><Link to="portfolio" smooth duration={500} spy offset={-70} activeClass="active">Portfolio</Link></li>
          <li><Link to="contact" smooth duration={500} spy offset={-70} activeClass="active">Contact</Link></li>
        </ul>
      </nav>

      <motion.section className="hero" id="hero" initial="initial" animate="animate" variants={fadeInUp}>
        <div className="left" style={{ flex: 1, minWidth: "280px" }}>
          <motion.h1>Full Stack Developer</motion.h1>
          <div className="typewriter-text">
            {text}
            <span className="cursor">|</span>
          </div>
          <p className="description">
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </p>
          <div className="tech-pill-container">
  {["Java", "Springboot", "Golang", "React",
    "Node.js","PostgreSQL"
  ].map((tech) => (
    <div className="tech-pill" key={tech}>{tech}</div>
  ))}
</div>

<div className="hero-btn-row">
  <a href="#portfolio" className="mini-btn">Projects</a>
  <a href="#contact" className="mini-btn">Contact</a>
</div>

<div className="social-icons-row">
  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
  <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
</div>
          {/* <div style={{ marginTop: '1.5rem' }}>
            <a href="#portfolio" className="btn">Projects</a>
            <a href="#contact" className="btn" style={{ marginLeft: '1rem' }}>Contact</a>
          </div> */}
        </div>
        <div className="right" style={{ flex: 1, minWidth: "280px", textAlign: "center" }}>
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
            alt="Hero Art"
            width={350}
            draggable={false}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ userSelect: "none" }}
          />
        </div>
      </motion.section>

      <motion.section className="about" id="about" initial="initial" animate="animate" variants={fadeInUp}>
        <h2>About Me</h2>
        <div className="about-wrapper">
          <motion.img
            src="/test4.jpeg"
            alt="Sai Kavya"
            className="profile-photo"
            draggable={false}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Hello, I'm Sai Kavya passionate about building smart and scalable web & mobile applications. I've completed a full-stack development course and constantly explore new technologies to refine my skills. Focused on continuous learning, I aim to transition into the IT industry by 2027 and eventually move towards AI and data science.
            </p>

            <div className="experience">
              <h3>6 Years Experience</h3>
              <div className="job">
                <h4>American Express (AMEX)</h4>
                <span>Oct 2023 - Present</span>
                <p>Full Stack Developer - Golang, React TS, Docker, GCP</p>
              </div>
              <div className="job">
                <h4>Engie Impact</h4>
                <span>Jun 2022 - Oct 2023</span>
                <p>Java & Golang Developer - Microservices, Spring Boot</p>
              </div>
              <div className="job">
                <h4>Erwin</h4>
                <span>Jun 2018 - May 2022</span>
                <p>ETL Developer - Python, Java, Data Processing</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a className="btn" href="/cv.pdf" download>Download CV</a>
          <a className="btn" href="#portfolio" style={{ marginLeft: '1rem' }}>View Projects</a>
        </div>

        <div className="card-grid" style={{ marginTop: "2.5rem" }}>
          <motion.div {...cardHover} className="stat-card" onClick={() => handleCardClick("projects")} whileHover="whileHover" role="button" tabIndex={0}>
            <h2>4</h2>
            <p>Total Projects</p>
            <small>Innovative web & mobile solutions crafted</small>
          </motion.div>
          <motion.div {...cardHover} className="stat-card" onClick={() => handleCardClick("certificates")} whileHover="whileHover" role="button" tabIndex={0}>
            <h2>3</h2>
            <p>Certificates</p>
            <small>Professional skills validated</small>
          </motion.div>
          <motion.div {...cardHover} className="stat-card" onClick={() => handleCardClick("techstack")} whileHover="whileHover" role="button" tabIndex={0}>
            <h2>12</h2>
            <p>Tech Stack</p>
            <small>Tools & technologies I work with</small>
          </motion.div>
        </div>
      </motion.section>
   {/* Portfolio */}
   <section id="portfolio">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          Portfolio Showcase
        </motion.h2>
        <p
          style={{
            textAlign: "center",
            color: "#bbb",
            maxWidth: 550,
            margin: "0.5rem auto 2rem",
          }}
        >
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>

        {/* Tabs */}
        <div className="tabs" role="tablist" aria-label="Portfolio Sections">
          <div
            role="tab"
            tabIndex={0}
            aria-selected={activeTab === "projects"}
            aria-controls="projects-panel"
            id="projects-tab"
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveTab("projects");
            }}
          >
            Projects
          </div>
          <div
            role="tab"
            tabIndex={0}
            aria-selected={activeTab === "certificates"}
            aria-controls="certificates-panel"
            id="certificates-tab"
            className={`tab ${activeTab === "certificates" ? "active" : ""}`}
            onClick={() => setActiveTab("certificates")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveTab("certificates");
            }}
          >
            Certificates
          </div>
          <div
            role="tab"
            tabIndex={0}
            aria-selected={activeTab === "techstack"}
            aria-controls="techstack-panel"
            id="techstack-tab"
            className={`tab ${activeTab === "techstack" ? "active" : ""}`}
            onClick={() => setActiveTab("techstack")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveTab("techstack");
            }}
          >
            Tech Stack
          </div>
        </div>

        {/* Tab Panels */}
        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby="projects-tab"
          hidden={activeTab !== "projects"}
        >
          <motion.div
            className="card-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {portfolioItems.map(({ id, title, desc, demo, details }) => (
              <motion.div
              key={id}  // change here
                className="project-card"
                {...cardHover}
                tabIndex={0}
                aria-label={`Project: ${title}`}
              >
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="project-links">
                  <a
                    className="live-demo"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    style={{paddingRight:'35px'}}
                  >
                    Live Demo
                  </a>
                  {/* <a
                    className="details-link"
                    href={details}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                  > */}
                    {/* <Link  to={`/project/${id}`} className="details-link">
  Details
</Link> */}
<button className="details-link" onClick={() => navigate(`/project/${id}`)}>Details</button>

                    
                  {/* </a> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          id="certificates-panel"
          role="tabpanel"
          aria-labelledby="certificates-tab"
          hidden={activeTab !== "certificates"}
        >
          <motion.div
            className="card-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {certificates.map(({ title, link }) => (
              <motion.div
                key={title}
                className="stat-card"
                {...cardHover}
                tabIndex={0}
                aria-label={`Certificate: ${title}`}
              >
                <h2>📜</h2>
                <p>{title}</p>
                <small>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#7e5bff", textDecoration: "underline" }}
                    tabIndex={-1}
                  >
                    View
                  </a>
                </small>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          id="techstack-panel"
          role="tabpanel"
          aria-labelledby="techstack-tab"
          hidden={activeTab !== "techstack"}
        >
          <motion.div
            className="card-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {techStack.map(({ icon, label }) => (
              <motion.div
                key={label}
                className="techstack-card"
                whileHover={{ scale: 1.07, boxShadow: "0 0 30px #7e5bffcc" }}
                tabIndex={-1}
                aria-label={label}
              >
                <div className="tech-icon">{icon}</div>
                <p>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* <motion.section id="portfolio" initial="initial" animate="animate" variants={fadeInUp}>
        <h2>Portfolio Showcase</h2>
        <p>Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.</p>

        <div className="tabs" role="tablist" aria-label="Portfolio tabs">
          {["projects", "certificates", "techstack"].map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab as any)}
              role="tab"
              aria-selected={activeTab === tab}
              tabIndex={0}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </div>
          ))}
        </div>

        {activeTab === "projects" && (
          <div className="card-grid" role="tabpanel" aria-labelledby="projects-tab">
            {portfolioItems.map((proj, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #7e5bffcc" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div style={{ marginTop: '1rem' }}>
                  <a className="btn" href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  <a className="btn" href={proj.details} style={{ marginLeft: '0.5rem' }} target="_blank" rel="noreferrer">Details</a>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="card-grid" role="tabpanel" aria-labelledby="certificates-tab">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                className="project-card"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #7e5bffcc" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3>{cert.title}</h3>
                <a className="btn" href={cert.link} target="_blank" rel="noreferrer">View Certificate</a>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "techstack" && (
          <div className="card-grid" role="tabpanel" aria-labelledby="techstack-tab" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className="techstack-card"
                aria-label={tech.label}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #7e5bffcc" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <div>{tech.label}</div>
              </motion.div>
            ))}
          </div>
        )}

      </motion.section> */}

      <motion.section className="contact" id="contact" initial="initial" animate="animate" variants={fadeInUp}>
        <h2>Contact Me</h2>
        <p>Got a question? Send me a message, and I'll get back to you soon.</p>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows={4} placeholder="Your Message" required />
          <button className="btn" type="submit">Send Message</button>
        </form>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h3>Let's Connect</h3>
         
          <div className="socials" style={{ justifyContent: 'center' }}>
            <motion.a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" whileHover={socialHover} aria-label="LinkedIn">
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://instagram.com/alright.abhi" target="_blank" rel="noopener noreferrer" whileHover={socialHover} aria-label="Instagram">
              <FaInstagram />
            </motion.a>
            <motion.a href="https://github.com/AbhishekGanvir" target="_blank" rel="noopener noreferrer" whileHover={socialHover} aria-label="GitHub">
              <FaGithub />
            </motion.a>
            <motion.a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" whileHover={socialHover} aria-label="Email">
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </motion.section>

      <footer>
        © 2025 - All Rights Reserved.
      </footer>
    </>
        } />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
         {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
    </Routes>
  );
}





