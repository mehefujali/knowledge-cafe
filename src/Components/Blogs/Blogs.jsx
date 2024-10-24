import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelSetReadingTime, handelSetBookmark, handleMakeUnRead, handelRemoveBookmark }) => {
      const [blogs, setBlogs] = useState([])
      const [loderStatus, setLoderstatus] = useState(false)
      useEffect(() => {
            setLoderstatus(true)
            setTimeout(() => {
                  fetch('blogs.json')
                        .then(res => res.json())
                        .then(data => setBlogs(data))

                  setLoderstatus(false)
            }, 1500)
      }, [])




      return (
            <div className="md:w-9/12  mb-12">
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
                        {loderStatus ? <span className="loading loading-spinner loading-lg absolute
                          top-2/3 sm:top-1/2 left-1/2 sm:left-1/3"></span> :
                              blogs.length > 0 ? (
                                    blogs.map(blog => {
                                          return <Blog key={blog.id}
                                                blog={blog}
                                                handelSetReadingTime={handelSetReadingTime}
                                                handelSetBookmark={handelSetBookmark}
                                                handleMakeUnRead={handleMakeUnRead}
                                                handelRemoveBookmark={handelRemoveBookmark}
                                          />
                                    }
                                    )
                              ) : (
                                    <p className=" text-green-500">Loded All data</p>
                              )
                        }
                  </div>
            </div>
      );
};
Blogs.propTypes = {
      handelSetReadingTime: PropTypes.func.isRequired,
      handelSetBookmark: PropTypes.func.isRequired,
      handleMakeUnRead: PropTypes.func.isRequired,
      handelRemoveBookmark: PropTypes.func.isRequired,
}


export default Blogs;