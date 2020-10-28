import React from 'react'
import axios from 'axios'
import SpellCard from './SpellCard'

import "./listSpells.css"

const baseUrl = 'https://www.dnd5eapi.co'

class ListSpells extends React.Component {

  state = {
    spells : []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const resp = await axios.get(`${baseUrl}/api/spells`)
    this.setState({spells : resp.data.results})
  }

  render() {
    return (
      <div className={this.props.overlay ? "listSpells overlay" : "listSpells"}>
        {this.state.spells && this.state.spells.map(spell => {
          return(
            <SpellCard url = {spell.url} displayFullCard={this.props.displayFullCard}/>
          )
        })}
      </div>
    )
  }
}

export default ListSpells
