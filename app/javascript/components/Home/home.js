import React, {Component} from 'react';
import Jumbotron from './jumbotron';
import Table from './Table/table'

class Home extends Component{
  constructor(){
    super()
    
    this.state = {
      course_modules: [
        {id: 1, title: 'React Full Course', description: 'Intermediate', active: false},
        {id: 2, title: 'Ruby on rails from Scratch', description: 'Beginner', active: true},
        {id: 3, title: 'Javascript for beginners', description: 'Beginner', active: false},
        {id: 4, title: 'Rails- React course', description: 'Intermediate', active: false}
      ]
    }
  }
  toggleVideos = (item, event) => {
    event.preventDefault()
    
    debugger
  }

  render(){
    return(
      <div>
        <Jumbotron />
        <Table toggleVideos={this.toggleVideos.bind(this)} course_modules={this.state.course_modules} />
      </div>
    )
  }
}

export default Home