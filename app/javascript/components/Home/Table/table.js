import React, { Component } from 'react'
import Items from './items'
import Selected from './selected'

class Table extends Component {
  constructor(props){
    super(props)
  }
 render() {
    const item = this.props.course_modules.map((data) =>{
      let toggleVideos = this.props.toggleVideos.bind(this, item)
      return (
        data.active ?
          <Selected toggleVideos = {toggleVideos} key={data.id} title={data.title} description={data.description}/> :
          <Items toggleVideos = {toggleVideos} key={data.id} title = {data.title} description = {data.description} />
      )
    })
   return (
     <div className = 'pt-4 mt-4'>
       <div className = 'container'>
         <div className = 'text-center'>
           <h3 className = 'pt-1 mt-1  '> More Videos</h3>
         </div>
          {item}
       </div>
     </div>
   )
 }

}

export default Table