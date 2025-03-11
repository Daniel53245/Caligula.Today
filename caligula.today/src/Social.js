import PropTypes  from 'prop-types'
import Grid from "@mui/material/Grid2";
import { Tweet } from "react-tweet";
import { styled } from "@mui/material/styles";
import classes from "./Social.module.css"



const Social = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div className={classes.Social}>
      {value === index && (
        <Grid container spacing={1}>
          <Grid size={5} sx={{textAlign:"center",margin:1,maxWidth:550,minWidth:250}}>
            <div sx={{displayPrint:'inline-box',margin:10,textAlign:'center'}}><Tweet id="1895387799026831633"/></div>
          </Grid>
          <Grid size={6} sx={{margin:1}}>
            <h1>This is Social</h1>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

Social.propTypes = {
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
}
export default Social;
