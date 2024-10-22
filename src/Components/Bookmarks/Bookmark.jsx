import PropTypes from "prop-types";

const Bookmark = ({ book }) => {
      const { title } = book
      return (
            <li className=" text-xl font-bold list-decimal p-2 bg-purple-200 rounded-lg">
                  {title}
            </li>
      );
};

Bookmark.propTypes = {
      book: PropTypes.object.isRequired
};








export default Bookmark;