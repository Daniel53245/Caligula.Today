import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import { useState } from "react";
import Home from './Home.js';
import Social from "./Social.js";
import Projects from "./Projects.js";
import Blogs from  "./Blogs.js";

const NavigationBar = () => {
        const[value,setValue] = useState(0);
        const handleChange = (event,newValue) =>{
                setValue(newValue);
        }
  return (
    <Box>
      <Box>
        <Tabs value = {value} onChange={handleChange}>
          <Tab label='Home' value={0}>
                
          </Tab>
          <Tab label='Blogs' value={1}> 
                
          </Tab>
          <Tab label='Social' value={2}>
                
          </Tab>
          <Tab label ='Projects' value={3}>
                
          </Tab>
        </Tabs>
        <Home value={value} index={0}/>
        <Blogs value = {value} index = {1}/>
        <Social value = {value} index = {2}/>
        <Projects value = {value} index = {3}/>
      </Box>
    </Box>
  );
};

export default NavigationBar;
