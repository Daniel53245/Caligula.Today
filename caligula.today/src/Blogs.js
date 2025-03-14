import PropTypes  from 'prop-types'
import BlogContainer from "./Blogs/BlogsContainer";

const Blogs = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div>
      {value === index && (
        <>
          <h1>This is Blogs</h1>
          <BlogContainer></BlogContainer>
        </>
      )}
    </div>
  );
};
Blogs.propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
}

export default Blogs;
