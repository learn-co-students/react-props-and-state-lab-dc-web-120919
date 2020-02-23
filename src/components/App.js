import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeTypeFunc = (event) => {
    // console.log("I'm in the App Again!")
    // console.log(event.target.value)
    this.setState({
      filters : {
        type: event.target.value
      }
    })
  }

  onFindPetsClickFunc = () => {
    // console.log("I'm getting clickedddd")
    if (this.state.filters.type === 'all'){
      fetch('/api/pets').then(r => r.json()).then(pets => {
        return this.setState({ pets: pets })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(r => r.json()).then(filteredPets =>{
        return this.setState({pets: filteredPets})
      })
    }
  }

  // onAdoptPetFunc = (id) => {
  //   // console.log("I'm getting adopted!")
  //   // console.log(id)
  //   let adoptedPet = this.state.pets.find(pet => pet.id === id)
  //   adoptedPet.isAdopted = true
  //   // console.log(adoptedPet)
  //   this.setState({
  //     pets: [...this.state.pets, adoptedPet]
  //   })
  // }

  onAdoptPetFunc = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeTypeFunc} onFindPetsClick={this.onFindPetsClickFunc}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPetFunc}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
