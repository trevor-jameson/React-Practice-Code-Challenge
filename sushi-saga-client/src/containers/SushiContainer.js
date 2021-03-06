import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushisSet.map((sushi, ind) => <Sushi sushi={sushi} key={ind} eatSushi={props.eatSushi}/>)
        }
        <MoreButton changePage={props.changePage}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer