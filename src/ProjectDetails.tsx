import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const mockProjectData = {
  '1': {
    id: '1',
    title: "IntervueAI",
    description: "Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.",
    techCount: 5,
    keyFeaturesCount: 6,
    demo: "https://your-demo.com",
    github: "https://github.com/your-repo",
    technologies: ["Next.js", "Firebase", "Shadcn", "Vapi", "Gemini"],
    features: [
      "User Auth – Sign up/sign in via Firebase email/password authentication.",
      "Dashboard – Simple, intuitive interface for managing interviews.",
      "No Forms – Just log in, speak, and start your interview.",
      "Realtime Feedback with AI.",
      "Downloadable Interview Reports.",
      "Gemini API integration for smarter Q&A.",
    ],
    image: "/mockup.png",
  },
};

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = mockProjectData[projectId as keyof typeof mockProjectData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="back-link-container">
          <Link to="/" className="back-link">← Back</Link>
          <span className="project-path">Projects &gt; {project.title}</span>
        </div>

        <div className="grid">
          {/* Left Column */}
          <div className="left">
            <h1 className="project-title">{project.title}</h1>
            <div className="gradient-line" />
            <p className="project-description">{project.description}</p>

            <div className="stats-boxes">
              <div className="stat-box">
                <h3>{project.techCount}</h3>
                <p>Total Technology</p>
              </div>
              <div className="stat-box purple">
                <h3>{project.keyFeaturesCount}</h3>
                <p>Key Features</p>
              </div>
            </div>

            <div className="button-group">
              <a className="mini-btn blue" href={project.demo} target="_blank">Live Demo</a>
              <a className="mini-btn pink" href={project.github} target="_blank">Github</a>
            </div>

            <h3 className="tech-title">Technologies Used</h3>
            <div className="tech-pill-container">
              {project.technologies.map((tech) => (
                <div className="tech-pill" key={tech}>{tech}</div>
              ))}
            </div>

            <h3 className="features-title">Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>✨ {feature}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="right">
            <img src={project.image} alt="project" className="project-image" />
          </div>
        </div>
      </motion.div>

      <style>{`
        body {
          margin: 0;
          background: radial-gradient(ellipse at center, #0f0f1a 0%, #0c0d20 100%);
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .container {
          padding: 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .back-link-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #888;
          font-size: 0.9rem;
        }

        .back-link {
          text-decoration: none;
          color: #aaa;
        }

        .project-title {
          font-size: 3rem;
          font-weight: bold;
          background: linear-gradient(to right, #8f7cf6, #c67aff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-line {
          width: 60px;
          height: 4px;
          background: linear-gradient(to right, #7e5bff, #c67aff);
          border-radius: 4px;
          margin-top: 8px;
        }

        .project-description {
          margin: 1rem 0 2rem;
          color: #ccc;
          max-width: 600px;
          font-size: 1rem;
        }

        .grid {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
        }

        .left {
          flex: 1 1 50%;
        }

        .right {
          flex: 1 1 40%;
          display: flex;
          justify-content: center;
        }

        .project-image {
          width: 100%;
          max-width: 500px;
          border-radius: 16px;
          box-shadow: 0 0 30px #7e5bff44;
        }

        .stats-boxes {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .stat-box {
          background: #1e1f36;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-align: center;
          color: #aaa;
        }

        .stat-box h3 {
          color: #7e5bff;
          font-size: 1.5rem;
          margin: 0;
        }

        .stat-box.purple h3 {
          color: #c67aff;
        }

        .mini-btn {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-weight: 500;
          margin-right: 1rem;
          text-decoration: none;
        }

        .mini-btn.blue {
          background: #3f50ff;
          color: white;
        }

        .mini-btn.pink {
          background: #8424e3;
          color: white;
        }

        .tech-title,
        .features-title {
          margin-top: 2rem;
          font-size: 1.2rem;
          color: #c6bfff;
        }

        .tech-pill-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.8rem;
        }

        .tech-pill {
          background: #2f2f4f;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          font-size: 0.85rem;
          color: #ccc;
        }

        .features-list {
          margin-top: 1rem;
          color: #ccc;
          line-height: 1.8;
          list-style: none;
          padding-left: 0;
        }

        .features-list li {
          margin-bottom: 0.6rem;
        }

        @media (max-width: 768px) {
          .grid {
            flex-direction: column;
          }

          .right {
            margin-top: 2rem;
          }
        }
      `}</style>
    </>
  );
}
