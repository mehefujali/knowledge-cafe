import PropTypes from "prop-types";

const Bookmarks = ({ readingTime }) => {


      return (
            <div className=" md:w-3/12 border rounded-lg">
                  {/* reading time  */}
                  <div className=" w-11/12 mx-auto rounded-lg bg-violet-100 border-2 p-2 text-xl mt-3 border-violet-500 text-violet-500">Spent time on read : {readingTime} min</div>

                  {/* bookmarks  */}
                  <div>


                  </div>
            </div>
      );
};

Bookmarks.propTypes = {
      readingTime: PropTypes.object.isRequired
}

export default Bookmarks;