import React from 'react'

export default function Display({count,inc,dec}) {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
