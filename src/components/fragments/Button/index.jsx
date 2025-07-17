import React from 'react'
import { Link } from 'react-router'

const Button = ({navlink, children, style="bg-dark"}) => {
  return (
    <Link to={navlink} className={`${style} py-1.5 rounded text-sm font-semibold px-4 button`}>
      {children}
    </Link>
  )
}

export default Button