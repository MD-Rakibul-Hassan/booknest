import React from 'react'

const Button = ({txt,styles}) => {
  return (
    <button className={`${styles} `}>
        {txt}
    </button>
  )
}

export default Button