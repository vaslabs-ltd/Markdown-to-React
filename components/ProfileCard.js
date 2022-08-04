import React from 'react'




export default function ProfileCard({name, photo, position, bio, text_color, background_color, comp_color}) {

  return (

    <div className="profileContainer"  >
      <div >
        <img src={photo} alt="" className="imageContainer" ></img>
      </div>
      <div className="">
        <h1 >{name}</h1>
        <h2 >{position}</h2>
        <p>{bio}</p>
      </div>
      
    </div>
  )
}
