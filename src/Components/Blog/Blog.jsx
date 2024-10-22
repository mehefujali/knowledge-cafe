
import PropTypes from 'prop-types';
import { useState } from 'react';

const Blog = ({ blog, handelSetReadingTime, handelSetBookmark }) => {
      const { title, courseThumbnail, authorName, authorImageAvatar, postDate, readingTime, hasTag } = blog

      const [bookmark, setBookmark] = useState(false)
      const handelBookmark = () => {
            setBookmark(true)
            handelSetBookmark(blog)
      }

      return (
            <div className=' w-full h-full flex flex-col gap-1 '>
                  <img className='  rounded-lg  w-full object-cover h-60' src={courseThumbnail} alt="" />
                  <div className=' flex items-center justify-between'>
                        <div className=' flex gap-2 items-center  '>
                              <img className=' border-white rounded-full w-14' src={authorImageAvatar} alt="" />
                              <div>
                                    <h3 className=' font-bold  md:text-xl'>{authorName}</h3>
                                    <p>{postDate}</p>
                              </div>
                        </div>
                        <div className=' flex gap-2 items-center'>
                              <h1>{readingTime} Min reading time </h1>
                              <h1 className=' text-xl cursor-pointer' onClick={handelBookmark}>
                                    {bookmark ? <i className="fa-solid fa-bookmark"></i> : <i className="fa-regular fa-bookmark"></i>}
                              </h1>
                        </div>
                  </div>
                  <h1 className=' text-xl font-bold  md:text-2xl'>{title}</h1>
                  <p className=' flex gap-1 items-center'>
                        {hasTag.map((has, idx) => (<span key={idx}># {has}</span>))}
                  </p>
                  <button onClick={
                        () => {
                              handelSetReadingTime(blog)
                              setBookmark(false)
                        }
                  } className=' btn btn-sm w-fit bg-transparent border-violet-500 text-violet-500 hover:border-none hover:bg-violet-500 hover:text-white'>Mark as read</button>
            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object.isRequired,
      handelSetReadingTime: PropTypes.func.isRequired,
      handelSetBookmark: PropTypes.func.isRequired
}

export default Blog;