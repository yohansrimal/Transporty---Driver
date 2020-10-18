import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function StatsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align="center" gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>

        <Typography variant="body1" color="textSecondary" component="p">
          Today Earnings: {props.earnings}
        </Typography>
        <br />
        <Typography variant="body1" color="textSecondary" component="p">
          Today Tickets: {props.tickets}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Edit|View&nbsp;
          <props.launch />
        </Button>
      </CardActions>
    </Card>
  );
}
