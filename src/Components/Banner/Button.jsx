import React from 'react'

const Button = ({btt,design}) => {
  return (
    <>
    <div>
    <button className={design}>{btt}</button>

    </div>
    
    
    </>
  )
}

export default Button
