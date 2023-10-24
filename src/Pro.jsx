import React from 'react'

export default function product(props) {
  return (
     <>
     <div className='col-md-3  item'>
      <h3>{props.title}</h3>
      <p>{props.desc} </p>
      <p>{props.price}</p>
      </div>
     </>
  )
}
