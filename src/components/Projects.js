import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    sectionTitle: {
        color: "#ffab40",
        fontWeight: 800,
        margin: "0 0 32px 0"
    },
    projectsContainer1: {
        display: "grid",
        gridTemplateColumns: "auto",
        gridGap: "20px",
        padding: "32px",
        backgroundColor: "#ffab40",
        margin: "10px 0 10px 0"
    },
    projectsContainer2: {
        display: "grid",
        gridTemplateColumns: "auto",
        gridGap: "20px",
        padding: "32px",
        backgroundColor: "#ffdd71",
    },
    projectsContainerImage: {
        width: "100%"
    },
    projectText: {
        fontWeight: 800
    },
    projectSubText: {

    }
}));

const Projects = () => {
    const classes = useStyles();
    return (
        <div>

            <Typography variant="h3" className={classes.sectionTitle}>Recent projects</Typography>

            <div className={classes.projectsContainer2}>
                <Typography variant="h3" className={classes.projectText}>ClearBot</Typography>
                <Typography variant="body1" className={classes.projectSubText}>
                    Decentralized Robot Swarms to Clean our Oceans
                </Typography>
                <Typography variant="body1" className={classes.projectSubText}>
                    Runner-up in the Global Grand Challenges Summit, 2019 - London.
                </Typography>
                <Link href={"https://clearbot.dev"} color={"textPrimary"}>
                    <Typography variant="h3" className={classes.projectText}>See more</Typography>
                </Link>
            </div>

            <div className={classes.projectsContainer1}>
                <Typography variant="h3" className={classes.projectText}>Smart Laundry System</Typography>
                <Typography variant="body1" className={classes.projectSubText}>
                    Web application that shows live status of laundry machines in the university residence laundry room.
                </Typography>
                <Link href={"https://sls.rctech.club"} color={"textPrimary"}>
                    <Typography variant="h3" className={classes.projectText}>See more</Typography>
                </Link>
            </div>
        </div>
    )
};

export default Projects;