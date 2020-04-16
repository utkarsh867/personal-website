import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import clearbotImage from "../images/clearbot.jpg";
import ProjectCard from "./ProjectCard";
import slsImage from "../images/sls.png";
import ooCamImage from "../images/oocam.png";
import dragonSearchImage from "../images/dragon.png";
import codeExpress from "../images/codexpress.jpg";

const useStyles = makeStyles((theme) => ({
  projectsSection: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    padding: "0 2vw",
    marginBottom: "20vh",
    gridGap: "20px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "auto",
    },
  },
  sectionTitle: {
    margin: "32px 0",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" className={classes.sectionTitle}>
        Recent projects
      </Typography>
      <div className={classes.projectsSection}>
        <ProjectCard
          title="Smart Laundry System"
          image={slsImage}
          text={
            "An IoT project to make ordinary washing machines into smart washing machines. SLS (Smart Laundry System) by R.C. Tech Club aims to help hall residents in R.C. Lee Hall view the availability of laundry machines that are situated on the 16th floor using their mobile devices. "
          }
          link="https://sls.rctech.club"
          spanSize={2}
        />

        <ProjectCard
          title="ClearBot"
          text="Decentralized Robot Swarms to Clean our Oceans.
          Runner-up in the Global Grand Challenges Summit, 2019 - London"
          image={clearbotImage}
          link="https://clearbot.dev"
          spanSize={1}
        />

        <ProjectCard
          title="Open Ocean Camera"
          image={ooCamImage}
          text={
            "An underwater camera, to leverage the power of technology and imaging to make the marine conservation process affordable, efficient and scalable."
          }
          link="https://www.openoceancam.com/"
          spanSize={1}
        />

        <ProjectCard
          title="Dragon Search"
          image={dragonSearchImage}
          text={
            "An academic research engine for financial researchers with capabilities like intelligent recurrent search by research papers, authors of the papers as well as by the topic of the researches."
          }
          link="https://github.com/davidbhan/Chengdu80"
          spanSize={1}
        />

        <ProjectCard
          title="CodeXpress Myanmar - Urban Farming"
          image={codeExpress}
          text={
            "An urban farming IoT device that shows the role of technology in sustainability. The project aims to address a common global problem on food production through urban farming"
          }
          link="http://codesustain.kitgor.com/2018-urban-farming/"
          spanSize={1}
        />
      </div>
    </>
  );
};

export default Projects;
