import React, { useState } from 'react'
// useState - function

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'Hello World') {
      return setText('random title')
    } else {
      return setText('Hello World')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Click
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
// Hook rules
// use they always start with use whatever its useState,useEffect ..ect
// component name must be uppercase always.
// must be in the function or component body
// cannot call donitionally
