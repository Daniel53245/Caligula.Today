import PropTypes  from 'prop-types'



const Projects = (props) => {
        const {children,value,index,...other} = props;
        return (
                <div>
                        {value === index && 
                        <h1>This is Projects</h1>}
                </div>
        ) 
}
Projects.propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
}


export default Projects