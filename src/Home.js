import PropTypes from "prop-types";
import { Fragment } from "react";
import classes from './Home.module.css';

const Home = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div className={classes.Home}> 
      {value === index && (
        <Fragment>
          <div>
            <h1>About Me</h1>
            <p>
              Welcome to my personal corner on the web! I am a passionate
              computer science professional with a solid background in research
              and software development. I hold a Bachelor of Advanced Computing
              (Hons) from the Australian National University, where I honed my
              skills in both academic and practical aspects of technology.
            </p>

            <p>
              My expertise spans a diverse range of programming languages
              including Java, Python, C++, and C#, and I am well-versed in
              modern web technologies such as Angular, React, and htmx. I also
              have a strong foundation in cloud computing, container
              orchestration with Docker, DevOps workflows, and network
              configuration – skills that have empowered me to deliver
              innovative projects from self-hosted mastodon instances to
              interactive terminal applications.
            </p>

            <p>
              My journey in technology has seen me excel as an embedded
              developer intern at Seeing Machines and as an academic tutor at
              ANU, where I supported and inspired future tech enthusiasts. One
              of my most exciting projects involved developing a knowledge graph
              approach to unlock insights into sleep apnea using electronic
              medical records – a testament to my commitment to applying
              cutting-edge solutions to real-world challenges.
            </p>

            <p>
              Certified as an AWS Cloud Practitioner, I continuously strive to
              integrate robust cloud infrastructures with creative software
              design. I am always eager to collaborate and push the boundaries
              of technology. Let's connect and create something extraordinary
              together!
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};
Home.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Home;
