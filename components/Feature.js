import React from 'react'

export default function Feature({title, photo, content}) {
  return (
    <div className='featureContainer'>
      
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        <div>
            <img src={photo} alt="" className='featureImageContainer'/>
        </div>
    </div>
  )
}
