import { workExperience } from "../helpers"
export default function WorkExperience() {
  const experience = function(job) {
    return(
      <li key={job.company}>
          <div className="car workExperience">
            <div className="workExperience">
              <span></span>
            <img className="card-img" src={job.logo} alt={job.company} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{job.company}</h5>
              <p className="card-text">Position: {job.position}</p>
              <p className="card-text">{job.years} -- {job.total_time}</p>
            </div>
          </div>
        </li>
    )
  }
  return (
    <div id='workExperience'>
      <h3>Work Experience</h3>
      <ul className="list-group-primary">
        {workExperience.map(job => experience(job))}
      </ul>
    </div>
    
  )
}