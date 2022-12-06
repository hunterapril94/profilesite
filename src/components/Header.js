export default function Header() {
  return (
    <header>
  <h2 id="myName">	&#60; April Hunter Larsen	&#47;&#62;</h2>
  <div className="dropdown btn-group">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="mainMenu" data-toggle='dropdown' data-bs-toggle="dropdown" aria-expanded="false">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </button>
    <ul className="dropdown-menu dropdown-menu-end" id="menuItems">
      <li><a className="dropdown-item" href="/">Home</a></li>
      <li><a className="dropdown-item" href="/projects">Projects</a></li>
      <li><a className="dropdown-item" href="/workExperience">Work Experience</a></li>
      <li><a className="dropdown-item" href="/about">About</a></li>
      <li><a className="dropdown-item" href="/visionBoard">Vision Board 2023</a></li>
      <li><a className="dropdown-item" href="/blog">Blog</a></li>     
    </ul>
  </div>
</header>
  )
}