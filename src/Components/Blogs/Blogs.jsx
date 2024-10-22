import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
      const [blogs, setBlogs] = useState([])
      useEffect(() => {
            fetch('blogs.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, [])




      return (
            <div className="md:w-9/12 ">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto">
                        {blogs.length > 0 ? (
                              blogs.map(blog => (
                                    <Blog key={blog.id} blog={blog} />
                              ))
                        ) : (
                              <p>No blogs available.</p>
                        )}
                  </div>
            </div>
      );
};



export default Blogs;