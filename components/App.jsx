import React from 'react';
import SpellList from "./SpellList";

const example1 = {
  "name": "Acid Arrow",
  "level": "2",
  "school": "Evocation",
  "casting_time": "1 action",
  "range": "90 feet",
  "components": "V S M",
  "materials": "Powdered rhubarb leaf and an adder's stomach",
  "duration": "instantaneous",
  "character_classes": "Wizard",
  "description": "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.",
  "higher_levels": "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd."
};

const example2 = {
  "name": "Acid Splash",
  "level": "cantrip",
  "school": "Conjuration",
  "casting_time": "1 action",
  "range": "60 feet",
  "components": "V S",
  "materials": "",
  "duration": "instantaneous",
  "character_classes": "Sorcerer, Wizard",
  "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
  "higher_levels": ""
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const spells = [example1, example2];
    return <SpellList spells={spells} />;
  }
}

export default App;