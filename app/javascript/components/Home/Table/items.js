import React, { Component} from 'react'
import Video from './video'

const Items = (props) => {
  return(
    <div className= 'row'>
      <div className = 'col-md-10 offset-1'>
        <div className = 'text-center'>
          <div className = 'card'>
            <div className = 'row'>
              <div className = 'col-md-4'>
                <Video />
              </div>
              <div className = 'col-md-8'>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <div className = 'cta-wrapper'>
                  <a className='btn cta-btn'> Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Items