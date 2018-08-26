import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SpellCard from './SpellCard';

const styles = {
  center: {
    alignSelf: 'center',
    justifySelf: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '2fr',
    gridTemplateRows: 'auto'
  }
};

/**
 * Display a list of spells in a single column
 */
class SpellList extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes, spells } = this.props;
    const cards = spells.map((spell) => {
      return (
        <div className={classes.center}>
          <SpellCard  key={spell.name} { ...spell } />
          <br></br>
        </div>
      );
    });
    return (
      <div className={classes.grid}>
        {cards}
      </div>
    );
  }
}

SpellList.propTypes = {
  classes: PropTypes.object.isRequired,
  spells: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(SpellList);
