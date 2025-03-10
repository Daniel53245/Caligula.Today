import PropTypes  from 'prop-types'



const Blogs = (props) => {
        const {children,value,index,...other} = props;
        return (
                <div>
                        {value === index && 
                        <h1>This is Blogs</h1>}
                </div>
        ) 
}
Blogs.propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
}

export default Blogs;
