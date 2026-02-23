import React from "react";
import { Link } from "react-router-dom";
import "./MyProjects.css";

const MyProjects = () => {
  // Placeholder projects
  const projects = [
    { id: 1, title: "Project 1", link: "/casestudy-joey" },
    { id: 2, title: "Project 2", link: "/casestudy-project2" },
    { id: 3, title: "Project 3", link: null },
  ];

  return (
    <section className="my-projects">
      <h2 className="section-title">
        My <span className="highlight">Projects</span>
      </h2>
      <p className="section-subtitle">A collection of my work in progress</p>

      <div className="projects-grid">
        {projects.map((project) =>
          project.link ? (
            <Link
              key={project.id}
              to={project.link}
              className="project-card-link"
            >
              <div className="project-card">
                <div className="project-image-placeholder"></div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Link>
          ) : (
            <div key={project.id} className="project-card">
              <div className="project-image-placeholder"></div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default MyProjects;
