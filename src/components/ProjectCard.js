import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { Parallax } from "rc-scroll-anim";

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    backgroundColor: "#242424",
    borderRadius: "5px",
    gridRowEnd: props => `span ${props.spanSize}`
  },
  projectsContainerCard: {
    backgroundColor: "#242424",
    height: "100%"
  },
  projectsContainerImage: {
    width: "100%"
  },
  projectText: {
    color: "white"
  },
  projectSubText: {
    color: "white"
  }
}));

const ProjectCard = ({ title, text, link, image, spanSize }) => {
  const classes = useStyles({ spanSize });
  return (
    <Parallax
      animation={{ y: 0, opacity: 1, playScale: [0.1, 0.7] }}
      style={{ transform: "translateY(100px)", opacity: 0 }}
      className={classes.projectsContainer}
    >
      <Card className={classes.projectsContainerCard}>
        <CardActionArea href={link}>
          <CardMedia component="img" image={image} title={title} />
          <CardContent>
            <Typography variant="h4" className={classes.projectText}>
              {title}
            </Typography>
            <Typography variant="body1" className={classes.projectSubText}>
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" href={link}>
            <Typography variant="body2" className={classes.projectText}>
              Learn more
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Parallax>
  );
};

export default ProjectCard;
