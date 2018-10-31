import React from 'react';
import { AuthConsumer } from "../authContext";
import SpellList from '../components/SpellList';
import Login from "../components/Login";
import Logout from "../components/Logout";
import spells from '../resources/srd';

class SpellCards extends React.Component {
  constructor() {
    super();
  }

  // TODO: separate component
  renderButtons() {
    return (
      <AuthConsumer>
      {
        ({ authenticated }) =>
          authenticated ? (
            <Logout />
          ) : (
            <Login />
          )
      }
    </AuthConsumer>
    );
  }

  render() {

    return (
      <div>
        {this.renderButtons()}
        {<SpellList spells={spells} />}
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

export default SpellCards;