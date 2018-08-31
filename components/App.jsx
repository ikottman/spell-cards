import React from 'react';
import SpellList from './SpellList';
import spells from '../resources/srd';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
  return (
    <div>
      <SpellList spells={spells} />
      <div style={{display: 'grid'}}>
        <br/>
        <footer style={{alignSelf: 'center', justifySelf: 'center'}}>
          All spells listed here are from the <a href='http://media.wizards.com/2016/downloads/DND/SRD-OGL_V5.1.pdf'>SRD</a> and are subject to the <a href='ogl.html'>OGL</a>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;