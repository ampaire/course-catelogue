import React, {Component} from 'react';

class Home extends Component{
  constructor(){
    super()
    
    this.state = {
      course_modules: [
        {id: 1, title: 'React Full Course', description: 'Intermediate', active: false},
        {id: 2, title: 'Ruby on rails from Scratch', description: 'Beginner', active: false},
        {id: 3, title: 'Javascript for beginners', description: 'Beginner', active: false},
        {id: 4, title: 'Rails- React course', description: 'Intermediate', active: false}
      ]
    }
  }
  render(){
    return(
      <div> Welcome to the homepage</div>
    )
  }
}

export default Home