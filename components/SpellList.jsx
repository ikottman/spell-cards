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
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    gridGap: '20px'
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
        <div key={spell.name} className={classes.center}>
          <SpellCard { ...spell } />
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
