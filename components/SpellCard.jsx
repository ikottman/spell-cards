import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  key: {
    display: 'inline',
    marginRight: '2px'
  },
  value: {
    display: 'inline'
  },
  card: {
    maxWidth: 650
  },
  bullet: {
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr',
    gridTemplateRows: 'auto'
  },
  class : {
    display: 'inline-block',
    gridColumnStart: 1,
    alignSelf: 'center',
    justifySelf: 'end'
  },
  name: {
    gridColumnEnd: 1,
    alignSelf: 'center',
    justifySelf: 'start'
  }
};

/**
 * Displays a single spell's information
 */
class SpellCard extends React.Component {
  constructor() {
    super();
    this.renderHigherLevels = this.renderHigherLevels.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
  }

  renderDescription() {
    return <div dangerouslySetInnerHTML={{__html: this.props.description}} />;
  }

  renderHigherLevels() {
    if (this.props.higher_levels) {
      return (
        <div>
          <br/>
          <Divider />
          <Typography>
          <div dangerouslySetInnerHTML={{__html: this.props.higher_levels}} />
          </Typography>
        </div>
      );
    }
  }

  render() {
    const { classes } = this.props;
    const bullet = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.grid}>
            <Typography className={classes.name} variant="headline" component="h2">
              {this.props.name}  {bullet}  {this.props.level}
            </Typography>
            <Typography className={classes.class } color="textSecondary">
              {this.props.class}
              {bullet}
              {this.props.school}
            </Typography>
          </div>
            <Typography variant="body2" className={classes.key}>
              Casting: 
            </Typography>
            <Typography className={classes.value}>{this.props.casting_time}</Typography>
            <br/>
            <Typography variant="body2" className={classes.key}>
              Duration: 
            </Typography>
            <Typography className={classes.value}>{this.props.duration}</Typography>
            <br/>
            <Typography variant="body2" className={classes.key}>
              Range: 
            </Typography>
            <Typography className={classes.value}>{this.props.range}</Typography>
            <br/>
            <Typography variant="body2" className={classes.key}>
              Components: 
            </Typography>
            <Typography className={classes.value}>{this.props.components} {this.props.materials ? `(${this.props.materials})` : ''}</Typography>
            <br/>
            <Typography component="p">
              {this.renderDescription()}
            </Typography>
            {this.renderHigherLevels()}
        </CardContent>
      </Card>
    );
  }
}

SpellCard.propTypes = {
  classes: PropTypes.object.isRequired,
  character_classes: PropTypes.string.isRequired
};

export default withStyles(styles)(SpellCard);
