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

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    backgroundColor: "#242424",
    borderRadius: "5px",
    gridRowEnd: props => `span ${props.spanSize}`
  },
  projectsContainerImage: {
    width: "100%"
  },
  projectText: {
    fontWeight: 800,
    color: "white"
  },
  projectSubText: {
    color: "white"
  }
}));

const ProjectCard = ({ title, text, link, image, spanSize }) => {
  const classes = useStyles({ spanSize });
  return (
    <Card className={classes.projectsContainer}>
      <CardActionArea href={link}>
        <CardMedia component="img" image={image} title={title} />
        <CardContent>
          <Typography variant="h3" className={classes.projectText}>
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
  );
};

export default ProjectCard;
