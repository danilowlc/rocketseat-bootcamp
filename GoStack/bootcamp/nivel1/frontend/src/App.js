import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import backgroundImage from "./assets/background.jpg";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `New Project ${Date.now()}`]);
    const response = await api.post("projects", {
      title: `New Project ${Date.now()}`,
      owner: "Danilo Cunha"
    })

    const project = response.data;

    setProjects([... projects, project]);

  }

  return (
    <>
      <Header title="Projects" />
      <img src={backgroundImage} alt="Imagem Halloween" />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Insert Project
      </button>
    </>
  );
}

export default App;
