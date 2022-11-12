import React from 'react'
import Card from "./card"
import "./cards.css"
export default function Cards(props) {
    const {data}=props
    let arr=[]
    if(data.length){
    for(let i=0;i<12;i++){
        arr.push(data[i])
    }}
    console.log(arr)
  return (
    <div>
    <div className='cards'>{
        arr.map(x=>{
          return(<Card data={x}/>)
          
        })
    }</div>
    </div>
  )
}
