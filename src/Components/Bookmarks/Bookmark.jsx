import PropTypes from "prop-types";

const Bookmark = ({ book }) => {
      const { title } = book
      return (
            <li className=" text-xl font-bold list-decimal">
                  {title}
            </li>
      );
};

Bookmark.propTypes = {
      book: PropTypes.object.isRequired
};








export default Bookmark;