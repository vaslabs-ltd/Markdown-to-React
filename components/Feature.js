import React from 'react'

export default function Feature({title, photo, content, text_color}) {
  return (
    <div className='featureContainer' style={{color: text_color}}>
      
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
