import { useState } from "react"

export default function Nav() {
  function handleClick() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  return(
<div class="nav">
  <button onClick={handleClick} className="dropbtn btn-secondary"><img src='../menu.png'></img></button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#workExperience">Work Experience</a>
    {/* <a href="#blog">Blog</a> */}
  </div>
</div>
  )
}