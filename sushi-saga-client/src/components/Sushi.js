import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {name, price, id, img_url} = props.sushi
  
  return (
    <div className="sushi">
      <div className="plate" 
          id={`sushi-${id}`}
          onClick={props.eatSushi}>
        {  !props.eaten ? null :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi