import React, { Component } from 'react'
import Video from './video'

const Selected = (props) => {
  return (
    <div className='row'>
      <div className='col-md-10 offset-1 pt-4 pb-4'>
        <div className='card'>
          <div className='row'>
            <div className='col-md-10 offset-md-1 pl-4'>
              <Video />
              <div className='pt-4 pb-4 pl-5'>
                <h4 className='pl-4'>{props.title}</h4>
                <p className='pl-4'>{props.description}</p>
                <div className='cta-wrapper pl-4'>
                  <a className='btn cta-btn btn-outline-danger'> Watch Video</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selected