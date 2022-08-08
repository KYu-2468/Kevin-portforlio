import React from "react";
import Project from "../component/Project";
import toyShop from "../assets/images/ToyShop.png";

const Projects = () => {
  const projects = [
    {
      name: "Toy Shop",
      description: "An ecommerce website that sells toys",
      image: toyShop,
    },
  ];

  return (
    <div id="projects">
      <div className="section projects">
        <h1>Projects:</h1>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;