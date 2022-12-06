import { projects } from "../helpers"

export default function Projects() {
  const project = function (project) {
    return (
        <li key={project.title}>
          <div className="car">
            <div className="projects">
            <img className="card-img-top projects" src={project.img} alt={project.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">Description: {project.description}</p>
              <p className="card-text">Technologies: {project.technologies}</p>
              <a href={project.link} className="btn btn-secondary">See This Project</a>
            </div>
          </div>
        </li>
    )
  }
  return (
    <div id='projects'>
      <h3>Projects</h3>
      <ul className="list-group-primary">
        {projects.map(item => project(item))}
      </ul>
    </div>
    
  )
}