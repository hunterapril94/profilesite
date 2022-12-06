import { blogposts } from "../helpers"
export default function Blog() {
  const posts = function(post) {
    console.log(post)
    return(
      <div className="car container card-body">
      <h4 className="card-title">{post.title}</h4>
      <p className="card-text">{post.text}</p>
      </div>
    )
  }
  return <div id="blog">
    <h3>Blog</h3>
  {blogposts.map(post => posts(post))}
  </div>
}