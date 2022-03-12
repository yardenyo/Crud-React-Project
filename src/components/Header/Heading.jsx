import React from 'react'
import './Heading.css'

const Heading = () => {
  return (
    <div className="d-flex justify-content-center">
        <div className="d-flex text-center heading-text-div">
          <h1> C <small className="small-text"> reate </small> </h1>
        </div>
        <div className="d-flex ms-4 text-center heading-text-div">
          <h1> R <small className="small-text"> ead </small> </h1>
        </div>
        <div className="d-flex ms-4 text-center heading-text-div">
          <h1> U <small className="small-text"> pdate </small> </h1>
        </div>
        <div className="d-flex ms-4 text-center heading-text-div">
          <h1> D <small className="small-text"> elete </small> </h1>
        </div>
      </div>
  )
}

export default Heading
