import React from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import profileImage from "../images/profile.jpg";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles( theme => ({
    topHeaderLayout: {
        display: "grid",
        gridTemplateColumns: "20% auto",
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: "auto",
        },
        padding: "32px 0",
        margin: "32px 0"
    },
    profileImageContainer: {
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 32px 0 0",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    profileImgStyles: {
        width: "100%",
    },
    headerTextContainer: {
        display: "grid",
        padding: "32px 32px",
        backgroundColor: "#eeff41",
    },
    headerText: {
        color: "#212121"
    },
    socialIconsContainer: {
        marginTop: "10px"
    },
    socialIcons: {
        margin: "0 18px 0 0"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.topHeaderLayout}>
            <div className={classes.profileImageContainer}>
                <img className={classes.profileImgStyles} src={profileImage} alt={"Profile"}/>
            </div>
            <div className={classes.headerTextContainer}>
                <Typography variant="h1" className={classes.headerText}>Utkarsh Goel</Typography>
                <Typography variant="h3" className={classes.headerText}>Computer Science, University of Hong Kong</Typography>
                <div className={classes.socialIconsContainer}>
                    <Link href={"https://github.com/utkarsh867"} color={"textPrimary"}><GitHubIcon className={classes.socialIcons} fontSize={"large"}/></Link>
                    <Link href={"https://twitter.com/ug867"} color={"textPrimary"}><TwitterIcon fontSize={"large"}/></Link>
                </div>
            </div>
        </div>
    )
};

export default Header;