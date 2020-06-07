import React, { Component } from 'react'
import Items from './items'


class Table extends Component {
  constructor(props){
    super(props)
  }
 render() {
    const item = this.props.course_modules.map((data) =>{
      return <Items key={data.id} title = {data.title} description = {data.description} />
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