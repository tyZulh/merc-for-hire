 import "./fullSpellCard.css"

const FullSpellCard = ({spell}) => {
  return(
    <div className='fullSpellCard' >
      <h2>{spell.name}</h2>
      <p>Casting time :</p>
      <p>{spell.casting_time}</p>
      <p>Duration</p>
      <p>{spell.duration}</p>
      <p>Range</p>
      <p>{spell.range}</p>
      <p>Material</p>
      <p>{spell.material}</p>
      <p>Component</p>
      <p>{spell.components.map(text => {
        return `${text} `
      })}</p>
      <p>Description</p>
      <p>{spell.desc.map(text => {
        return `${text} `
      })}</p>
      <p>School</p>
      <p>{spell.school.name}</p>
    </div>
  )
}

export default FullSpellCard
