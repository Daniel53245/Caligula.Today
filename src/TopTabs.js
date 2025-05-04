import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const TabPannel = (props) => {
  const { children, value, index, ...other } = props;

  return <div>{value === index && <Box>{children}</Box>}</div>;
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange}>
        
        <Tab label="item1" value={0} />
        <Tab label="item2" value={1} />
        <Tab label="item3" value={2} />
      </Tabs>
      <TabPannel value={value} index={0}>
        <h1>We got tab 1</h1>
      </TabPannel>
      <TabPannel value={value} index={1}>
        <h1>We got tab 2</h1>
      </TabPannel>
      <TabPannel value={value} index={2}>
        <h1>We got tab 3</h1>
      </TabPannel>
    </Box>
  );
}
