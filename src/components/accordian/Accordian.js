import React, { useState } from 'react'
import questions from './api'
import MyAccordian from './MyAccordian'
import './accordian.css'

const Accordian = () => {
    const[data,setData]=useState(questions)
  return (
    <>
    <aka>
    <section className='main-div'>
      {
        data.map((curElem)=>{
            const {id}=curElem;
            return <MyAccordian key={id}{...curElem}/>
        })
      }
      </section>
      </aka>
    </>
  )
}

export default Accordian