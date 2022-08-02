import React from 'react'

export default function Ability({ability, photo}) {
  return (
    <div className='abilityContainer'>
        
        <div>
            <h2>{ability}</h2>
        </div>
        <div className='abilityImageContainer'>
            <img src={photo} alt="" className='abilityImage'/>
        </div>
    </div>
  )
}
