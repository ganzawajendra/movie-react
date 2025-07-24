import React from 'react'

const InputSubmit = ({value, className = ""}) => {
  return (
    <>
        <input type="submit" value={value} className={`bg-manual-red text-manual-white py-1.5 rounded text-sm font-semibold px-4 button ${className}`}/>
    </>
  )
}

export default InputSubmit