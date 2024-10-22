
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
      const { title, courseThumbnail, authorName, authorImageAvatar, postDate, readingTime, hasTag } = blog

      return (
            <div className=' w-full h-full flex flex-col gap-3 '>
                  <img className='  rounded-lg  w-full object-cover h-60' src={courseThumbnail} alt="" />
                  <div>
                        <div>
                              <img className=' rounded-full w-14' src={authorImageAvatar} alt="" />
                        </div>
                  </div>
                  <h1 className=' text-xl font-bold md:text-2xl'>{title}</h1>
            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object.isRequired
}

export default Blog;