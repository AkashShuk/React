import React, { useState } from 'react'
import { FaStar} from "react-icons/fa";
import './App.css'

const StarGenerate = (numOfstar) =>{
  const[selected,setSelected]=useState(0);
  return Array(numOfstar).fill()
  .fill()
  .map((item,i)=> (<Star key={i}
   selected={selected > i}
   onSelected = {()=>setSelected(i+1)}
   />
   ));  
}

const Star = ({selected,onSelected}) =>{
  return<FaStar color={selected ? 'red' : 'gray'} 
  onClick={onSelected}/>
}


export default function App(){
  return (
    <div className='App'>
       {StarGenerate(5)}
    </div>
  )
}