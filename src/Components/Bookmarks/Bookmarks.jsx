import PropTypes from "prop-types";
import Bookmark from "./Bookmark";


const Bookmarks = ({ readingTime, bookmark }) => {


      return (
            <div className=" md:w-3/12 border rounded-lg">
                  {/* reading time  */}
                  <div className=" w-11/12 mx-auto rounded-lg bg-violet-100 border-2 p-2 text-xl mt-3 border-violet-500 text-violet-500">Spent time on read : {readingTime} min</div>

                  {/* bookmarks  */}
                  <div className=" w-9/12 mx-auto mt-4 " >
                        <h1 className="text-2xl font-bold">Bookmarked Blogs : {bookmark.length}</h1>
                        <ol className=" mt-3 flex flex-col gap-2" >


                              {bookmark.map((book, idx) => (<Bookmark key={idx} book={book}></Bookmark>))}

                        </ol>
                  </div>
            </div>
      );
};

Bookmarks.propTypes = {
      readingTime: PropTypes.object.isRequired,
      bookmark: PropTypes.array.isRequired
}

export default Bookmarks;