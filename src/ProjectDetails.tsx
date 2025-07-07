// ProjectDetails.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const portfolioItems = [
  {
    slug: "intervueai",
    title: "IntervueAI",
    desc: "Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.",
    demo: "https://intervueai.live",
    imageUrl: "/projects/intervueai.png",
    details: `IntervueAI is an innovative platform that uses AI to conduct real-time mock interviews. It eliminates the need for forms or clicking through questions, allowing for a natural conversational experience. Built with React and TypeScript for the frontend and Node.js for backend API integration.`
  },
  {
    slug: "blendy",
    title: "Blendy",
    desc: "A social app where you can connect in real-time, log in with one click, share moments, posts instantly.",
    demo: "https://blendy.live",
    imageUrl: "/projects/blendy.png",
    details: `Blendy is a real-time social app focused on instant sharing and connectivity. It supports one-click login and seamless posting of moments, aiming for a smooth user experience on both web and mobile.`
  },
  {
    slug: "watchit",
    title: "WATCHit",
    desc: "A video streaming app made for easy, personal entertainment and everything you love to binge.",
    demo: "https://watchit.live",
    imageUrl: "/projects/watchit.png",
    details: `WATCHit is a personalized video streaming app designed for binge-watching with a user-friendly interface. It features playlist management, content recommendations, and high-quality streaming.`
  },
  {
    slug: "leafchat",
    title: "Leafchat",
    desc: "A chat app with a smooth, natural feel leafy UI, falling leaves, and calming sounds like an autumn breeze.",
    demo: "https://leafchat.live",
    imageUrl: "/projects/leafchat.png",
    details: `Leafchat brings a calming experience to chat apps with its leafy UI theme, ambient falling leaves animations, and soothing sounds. It's built to create relaxing social interactions.`
  }
];

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "#eee" }}>
        <h2>Project not found</h2>
        <p>Sorry, we couldn't find the project you are looking for.</p>
        <Link to="/" style={{ color: "#7e5bff", textDecoration: "underline" }}>
          Go back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "3rem auto",
        padding: "1rem",
        color: "#ddd",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <h1 style={{ color: "#a28dff", marginBottom: "1rem" }}>{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        style={{ width: "100%", borderRadius: 12, boxShadow: "0 0 15px #7e5bffcc" }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
        {project.details}
      </p>
      <div style={{ marginTop: "2rem" }}>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#7e5bff",
            padding: "0.75rem 1.5rem",
            borderRadius: 10,
            color: "white",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 0 15px #7e5bffbb",
          }}
        >
          View Live Demo
        </a>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <Link
          to="/"
          style={{
            color: "#7e5bff",
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: "600",
          }}
        >
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
