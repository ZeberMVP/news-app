import React, { Component } from "react";
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: this.props.data
    }
  }

  openPage = () => {
    window.open(this.props.data.url, "_blank");
  }

  render() {
    return (
      <MuiCard sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.data.headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.data.abstract}
          </Typography>
          <Typography>
            {this.props.data.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={this.props.remove}>Delete</Button>
          <Button size="small" onClick={this.openPage}>Learn More</Button>
        </CardActions>
      </MuiCard>
    )
  }
}

export default Card;
