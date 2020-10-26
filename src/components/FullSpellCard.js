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
    </div>
  )
}

export default FullSpellCard
