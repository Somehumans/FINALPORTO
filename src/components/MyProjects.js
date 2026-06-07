import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";

const projects = [
  {
    id: 1,
    title: "Joey",
    link: "/casestudy-joey",
    img: "/aboutme/JoeyP1.svg",
    description:
      "An AI-powered platform that connects homeowners with skilled tradespeople through clear profiles and simpler job posting.",
  },
  {
    id: 2,
    title: "DinoCode",
    link: "/casestudy-project2",
    img: "/aboutme/DinoCodeP2.svg",
    description:
      "A gamified learning app that helps beginners stick with front-end coding through short lessons, quizzes, and friendly pacing.",
  },
  {
    id: 3,
    title: "NutriBeli",
    link: "/casestudy-nutribeli",
    img: "/aboutme/Nutribeli.svg",
    description:
      "Automatic nutrition, zero effort — a speculative wearable + app that tracks nutrients passively and turns them into personalized food guidance.",
  },
  {
    id: 4,
    title: "Field Mice",
    link: "/casestudy-fieldmice",
    img: "/aboutme/FieldMice.svg",
    description:
      "A free online card game — hit or stay to 21 with illustrated mice, trump cards, Micecoin stakes, and online multiplayer.",
  },
];

const ProjectCard = ({ project }) => {
  const content = (
    <div className="project-card">
      {project.img ? (
        <img src={project.img} alt={project.title} className="project-card-img" />
      ) : (
        <div className="project-image-placeholder" />
      )}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
    </div>
  );

  if (project.externalLink) {
    return (
      <a
        href={project.externalLink}
        className="project-card-link"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor-label="View project"
      >
        {content}
      </a>
    );
  }

  if (project.link) {
    return (
      <Link to={project.link} className="project-card-link" data-cursor-label="View project">
        {content}
      </Link>
    );
  }

  return content;
};

const MyProjects = () => {
  return (
    <section id="case-studies" className="my-projects">
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>
      <p className="section-subtitle">A collection of my work in progress</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
