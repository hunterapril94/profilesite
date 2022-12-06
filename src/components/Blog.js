import { blogposts } from "../helpers"
export default function Blog() {
  const posts = function(post) {
    console.log(post)
    return(
      <div>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
      </div>
    )
  }
  return <div>
  {blogposts.map(post => posts(post))}
  </div>
}