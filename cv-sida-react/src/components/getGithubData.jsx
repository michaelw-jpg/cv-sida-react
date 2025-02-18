import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const username = "michaelw-jpg";
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const publicProjects = data.filter((repo) => !repo.private).slice(0, 8);
        setProjects(publicProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => openModal(project)}
        >
          <img
            src="https://img.icons8.com/ios_filled/512/github.png"
            alt="Project Avatar"
            className="project-image"
          />
          <h4 className="project-title">{project.name}</h4>
          <p className="project-subtitle">Click for details</p>
        </div>
      ))}

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title">{selectedProject.name}</h3>
            <p className="modal-description">
              {selectedProject.description || "No description available."}
            </p>
            <a
              href={selectedProject.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
