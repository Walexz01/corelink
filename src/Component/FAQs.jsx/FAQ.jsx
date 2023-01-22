import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


const FAQ = ({question, answer,className}) => {
    const [isfaqShowing, setIsfaqShowing] = useState(false)
  return (
    <article className={className}  onClick={()=> setIsfaqShowing(prevState => !prevState)}>
        <div>
            <h3>{question} </h3>
            <span>
                {
                   isfaqShowing? <AiOutlineMinus/> :<AiOutlinePlus/>
                } 
                
            </span>
        </div>
      {  isfaqShowing &&  <p> {answer}</p> }

    </article>
  )
}

export default FAQ