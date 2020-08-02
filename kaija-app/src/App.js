import React, { Component } from 'react';
import Aminals from './animals'
n   
class App extends Component {
  state={
    animals : [
      {name: "Ryu", age: 30, belt:'black', id: 1}
      {name: "Yoshi", age: 20, belt:'green', id: 2}
      {name: "Crystal", age: 25, belt:'pink', id: 3}
    ]
  }
  addAnimal = (animal) => {
    animal.id = Math.random();
    let animals = [...this.state.animals, animal];
    this.setState({
      animals: animals
    })
  }
  deleteAnimal = (id) => {
    let animals = this.state.animals.filter(animal => {
      return animal.id !== id
    });
    this.setState({
      animals: animals
    })

  }
  render(){
    return(
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome !</p>
        < Animals animals={this.state.animals}/>
       <addAnimal addAnimal={this.addAnimal}/>
      </div>
    );
  }
}

export default App;
