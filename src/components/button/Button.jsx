import React from 'react'

const Button = ({txt,styles,action}) => {
  return (
    <button className={`${styles} `} onClick={action}>
        {txt}
    </button>
  )
}

export default Button