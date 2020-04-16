import { Typography } from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { WorkCard } from "./WorkCard";
import csLogo from "../images/cs_logo.jpg";
import rcTechLogo from "../images/rctechlogo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px 0 200px 0",
    padding: "0 2vw",
  },
  section: {
    margin: "20px 0 50px 0",
  },
  sectionTitle: {
    fontWeight: 800,
  },
}));

export const Work = () => {
  const classes = useStyles(undefined);
  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.sectionTitle}>
        Work Experience
      </Typography>
      <div className={classes.section}>
        <WorkCard
          title="Credit Suisse"
          subtitle="Summer Analyst (IT)"
          link="https://www.credit-suisse.com/hk/en.html"
          image={csLogo}
          text={
            "Full stack developer - Worked on multiple projects to be used within Credit Suisse by the prime services division."
          }
          spanSize={1}
        />
      </div>
      <Typography variant="h1" className={classes.sectionTitle}>
        Organizations
      </Typography>
      <div className={classes.section}>
        <WorkCard
          title="RC Tech Club"
          subtitle="Founder | President"
          link="https://rctech.club"
          image={rcTechLogo}
          text={
            "Founded and lead the RC Tech Club, a student-led developer community in R.C. Lee Hall, HKU."
          }
          spanSize={1}
        />
      </div>
    </div>
  );
};
