import React from 'react'
// import faker from "faker"
import "./card.css"
export default function Card(props) {
  const{data}=props
  return (
    <div>
        <div className="card">
        <div className='image'>
          <img src={data.thumbnailUrl}/>
        </div>
        <div>{data.id}</div>
        </div>
    </div>
  )
}
