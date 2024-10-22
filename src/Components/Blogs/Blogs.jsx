import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelSetReadingTime, handelSetBookmark }) => {
      const [blogs, setBlogs] = useState([])
      useEffect(() => {
            fetch('blogs.json')
                  .then(res => res.json())
                  .then(data => setBlogs(data))
      }, [])




      return (
            <div className="md:w-9/12  mb-12">
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
                        {blogs.length > 0 ? (
                              blogs.map(blog => (
                                    <Blog key={blog.id}
                                          blog={blog}
                                          handelSetReadingTime={handelSetReadingTime}
                                          handelSetBookmark={handelSetBookmark}
                                    />
                              ))
                        ) : (
                              <p>No blogs available.</p>
                        )}
                  </div>
            </div>
      );
};
Blogs.propTypes = {
      handelSetReadingTime: PropTypes.func.isRequired,
      handelSetBookmark: PropTypes.func.isRequired
}


export default Blogs;