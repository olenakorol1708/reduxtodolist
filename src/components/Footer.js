import React from 'react'
import { useSelector } from 'react-redux';



const Footer = () => {

  const count = useSelector((state)=>state.tasks.count);

  return (
    <div>


      {
      count>1 
      ?
      ( <p> You have<span> </span>
      {count} tasks for today </p> ): (<p>You have <span> </span>{count} task for today</p>)
      }
   
    </div> 
  )
}

export default Footer
