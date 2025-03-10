import PropTypes  from 'prop-types'



const Social = (props) => {
        const {children,value,index,...other} = props;
        return (
                <div>
                        {value === index && 
                        <h1>This is Social</h1>}
                </div>
        ) 
}
Social.propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
}
export default Social;
