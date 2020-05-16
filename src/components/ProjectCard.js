import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {
  Typography,
  Card,
  Container,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  projectsContainer: {
    borderRadius: "5px",
    gridRowEnd: props => `span ${props.spanSize}`,
  },
  projectsContainerCard: {
    backgroundColor: theme.palette.background.default,
    elevation: 0,
    height: "100%",
  },
  projectsContainerImage: {
    width: "100%",
  },
  projectText: {
    color: "white",
  },
  projectSubText: {
    color: "white",
  },
}))

const ProjectCard = ({ title, text, link, image, spanSize }) => {
  const classes = useStyles({ spanSize })
  return (
    <Container className={classes.projectsContainer}>
      <Card className={classes.projectsContainerCard} elevation={0}>
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
              See project
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default ProjectCard
