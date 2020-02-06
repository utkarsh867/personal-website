import {Typography} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {WorkCard} from "./WorkCard";
import csLogo from "../images/cs_logo.jpg";
import rcTechLogo from "../images/rctechlogo.svg";

const useStyles = makeStyles(theme => ({
    section: {
        display: "block",
    },
    sectionTitle: {
        color: "#ffab40",
        fontWeight: 800,
    }
}));

export const Work = () => {
    const classes = useStyles(undefined);
    return (
        <>
            <Typography variant="h3" className={classes.sectionTitle}>
                Experience
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
        </>
    )
};
