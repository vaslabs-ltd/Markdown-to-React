import React from 'react'

export default function ImageGrid({image1, image2, image3, image4}) {
  return (
    <div className='imageGrid'>
        <div className='one'>
            <img src={image1} alt="" />
        </div>
        <div className='two'>
            <img src={image2} alt="" />
        </div>
        <div className='three'>
            <img src={image3} alt="" />
        </div>
        <div className='four'>
            <img src={image4} alt="" />
        </div>
    </div>
  )
}
