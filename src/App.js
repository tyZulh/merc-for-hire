import './App.css';
import React from 'react';
import ListSpells from './components/ListSpells';
import FullSpellCard from './components/FullSpellCard';

class App extends React.Component {
  state = {
    spell : null,
    overlay : false
  };

  displayFullCard = (spell) => {
    this.setState({ spell : spell, overlay : !this.state.overlay})
  }

  render() {
    console.log(this.state);
    return (
      <div className={this.state.overlay ? `App displayOverlay` : `App`}>
        <ListSpells displayFullCard={this.displayFullCard} overlay={this.state.overlay}/>
        { this.state.spell && <FullSpellCard display={this.displayFullCard} spell={this.state.spell} /> }
        { this.state.spell && <div className='App-overlay'></div> }
      </div>
    );
  }
}

export default App;
