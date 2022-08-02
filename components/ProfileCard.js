import React from 'react'

export default function ProfileCard({name, photo, position, bio}) {
  return (
    <div className="profileContainer">
      <div >
        <img src={photo} alt="" className="imageContainer" ></img>
      </div>
      <div className="">
        <h1 style={{color: "red"}}>{name}</h1>
        <h2 className="profession">{position}</h2>
        <p>{bio}</p>
      </div>
      
    </div>
  )
}
