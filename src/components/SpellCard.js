
import React from "react";
import axios from "axios"

import "./spellCard.css"
import FullSpellCard from "./FullSpellCard";

const baseUrl = 'https://www.dnd5eapi.co'

class SpellCard extends React.Component {

  state = {}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async() => {
    const resp = await axios.get(`${baseUrl}${this.props.url}`)
    this.setState({ spell: resp.data })
  }

  displayFullCard = () => {
    this.setState({ displayFullCard: !this.state.displayFullCard})
  }

  render() {
    const spell = this.state.spell
    console.log(spell);
    return (
      <div className="cardSpell" onClick={this.displayFullCard}>
        {this.state.displayFullCard &&
          <FullSpellCard spell={this.state.spell} display={this.displayFullCard}/>
        }
        {
          this.state.displayFullCard &&
          <div className="cardSpell-display-overlay">
          </div>
        }
        <h2>{spell && spell.name}</h2>
        {spell &&
          <div className="cardSpell-description">
            <h3> Description</h3>
            <p>{spell && spell.desc}</p>
          </div>
        }
      </div>
    )
  }
}

export default SpellCard
