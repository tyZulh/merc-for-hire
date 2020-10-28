import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./fullSpellCard.css"

const FullSpellCard = ({display, spell}) => {
  return(
    <div className='fullSpellCard' >
      <div className='fullSpellCard-header'>
        <h2 className='fullSpellCard-title'>{spell.name}</h2>
        <FontAwesomeIcon icon={faTimes} onClick={()=>display(null)}/>
      </div>
      
      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Casting time :</p>
        <p className=''>{spell.casting_time}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Duration : </p>
        <p className=''>{spell.duration}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Range :</p>
        <p className=''>{spell.range}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Material : </p>
        <p className=''>{spell.material ? spell.material : `none`}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Component : </p>
        <p className=''>{spell.components.map(text => {
          return `${text} `
        })}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>School : </p>
        <p className=''>{spell.school.name}</p>
      </div>

      <div className='fullSpellCard-info'>
        <p className='fullSpellCard-info-title'>Description : </p>
        <p className='fullSpellCard-info-text'>{spell.desc.map(text => {
          return `${text} `
        })}</p>
      </div>
    </div>
  )
}

export default FullSpellCard
