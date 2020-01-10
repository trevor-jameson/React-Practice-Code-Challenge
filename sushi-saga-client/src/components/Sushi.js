import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {name, price, id, img_url} = props.sushi
  debugger
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={/* Give me a callback! */ null}>
        { 
          (!props.eaten) ?
            <img src={img_url} width="100%" />
          :
            null
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi