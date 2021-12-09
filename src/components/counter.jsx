import React from "react"

const getBadgeClasses = (value) => {
  let classes = 'badge m-2 '
  classes = classes + (value === 0 ? 'bg-warning' : 'bg-primary')
  return classes
  }
  
const Counter = (props) => {

  return (
    <div> 
        <span>{props.name}</span>
        <span className={getBadgeClasses(props.value)}>{props.value === 0 ? 'empty' : props.value}</span>

        <button className='btn btn-primary btn-sm m-2' onClick={() => props.onIncrement(props.id)}>+</button>

        <button className='btn btn-primary btn-sm m-2' onClick={() => props.onDecrement(props.id)}>-</button>

        <button className='btn btn-danger btn-sm m-2' onClick={() => props.onDelete(props.id)}>Delete </button>
    </div> 
  )
}

export default Counter