import React from 'react'
import './Header.scss'

export default function Header({ title, text }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
