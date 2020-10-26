
import React from "react";
import axios from "axios"

const baseUrl = 'https://www.dnd5eapi.co'

class SpellCard extends React.Component {

  state = {
    spell:{}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async() => {
    const resp = await axios.get(`${baseUrl}${this.props.url}`)
    console.log(resp);
    this.setState({ spell : resp.data})
  }

  render() {
    const spell = this.state.spell
    console.log(spell);
    return (
      <div className="CardSpell">
        <h2>{spell && spell.name}</h2>
        <p>{spell && spell.desc}</p>
      </div>
    )
  }
}

export default SpellCard
