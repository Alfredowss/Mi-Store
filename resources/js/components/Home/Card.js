import React from 'react'

export default function Card({url, height, backgroundSize, backgroundPosition}){
    return(
        <div className="w-100" style={{
            backgroundImage: `url(${url})`,
            height,
            backgroundSize,
            backgroundPosition,
        }}/>
    )
}