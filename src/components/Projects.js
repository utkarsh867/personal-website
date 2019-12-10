import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";
import clearbotImage from "../images/clearbot.jpg";
import ProjectCard from "./ProjectCard";
import slsImage from "../images/sls.png";

const useStyles = makeStyles(theme => ({
  projectsSection: {
    display: "grid",
    gridTemplateColumns: "30% 30% 30% auto",
    gridGap: "20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto"
    }
  },
  sectionTitle: {
    color: "#ffab40",
    fontWeight: 800,
    margin: "0 0 32px 0"
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        Recent projects
      </Typography>
      <div className={classes.projectsSection}>
        <ProjectCard
          title="ClearBot"
          text="Decentralized Robot Swarms to Clean our Oceans.
          Runner-up in the Global Grand Challenges Summit, 2019 - London"
          image={clearbotImage}
          link="https://clearbot.dev"
          spanSize={1}
        />

        <ProjectCard
          title="Smart Laundry System"
          image={slsImage}
          text={
            "An IoT project to make ordinary washing machines into smart washing machines"
          }
          link="https://sls.rctech.club"
          spanSize={2}
        />
      </div>
    </>
  );
};

export default Projects;
