import React from 'react'
import axios from 'axios'

const baseUrl = 'https://www.dnd5eapi.co'

class ListSpells extends React.Component {

  fetchData = async () => {
    const resp = await axios.get(`${baseUrl}/api/spells`)
    this.setState({spells : resp.data.result})
  }

  render() {
    return (
      <div className='listSpells'>

      </div>
    )
  }
}

export default ListSpells
