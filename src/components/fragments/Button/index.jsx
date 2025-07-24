import React from 'react'
import { Link } from 'react-router'

const Button = ({navlink, children, style="bg-dark", padding = "px-4"}) => {
  return (
    <Link to={navlink} className={`${style} py-1.5 rounded text-sm font-semibold ${padding}`}>
      {children}
    </Link>
  )
}

export default Button