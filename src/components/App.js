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

  filterPet= (event) => {
    console.log('Filtering..', event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })

  }

  petClick = (filteredValue) => {

    // console.log('petClick')
     (filteredValue!=='all') ? fetch(`/api/pets?type=${filteredValue}`).then(res => res.json()).then(data => this.setState({pets: data})) : fetch('/api/pets').then(res => res.json()).then(data => this.setState({pets: data}))
    // console.log(this.state.pets)
    }

  dummyFunc = (id) => {
    console.log("dummmmmy functionnnnnnn :O ")
    let adoptedPet = this.state.pets.find(pet => pet.id === id)
      // console.log("Before change", adoptedPet)
      // adoptedPet.isAdopted =  true
      // console.log("after change", adoptedPet) 
      let updatedPets = this.state.pets.map(pet => pet === adoptedPet ? {...pet, isAdopted: true} : pet)
      console.log(this.state.pets)
      this.setState({
        pets: updatedPets
      })
      console.log("END OF DUMMMMMY")

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.filterPet} 
                onFindPetsClick={this.petClick}
                filteredValue ={this.state.filters.type}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                filteredPets={this.state.pets}
                onAdoptPet={this.dummyFunc}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App