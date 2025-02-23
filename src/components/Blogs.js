import React from 'react'
import Cards from './Cards'

const Blogs = ({blogs}) => {
    console.log(blogs);
    
  return (
    <div>
        <h2>This is Blogs Page</h2>
      {
        blogs.map(blog=> (
            <Cards key={blog.id} post={blog} />          
        ))
      }
      
    </div>
  )
}

export default Blogs
