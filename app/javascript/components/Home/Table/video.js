import React from 'react'

const Video = (props) =>{
  return(
    <div className = 'pt-4 pb-4'>
      <iframe
        width="300"
        height="215"
        src="https://www.youtube.com/embed/qI43yX1QeLM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default Video