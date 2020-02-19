import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log('Pet Browser', this.props)
    return <div className="ui cards">
      {this.props.filteredPets.map(pet => 
      <Pet onPet={pet}
            key = {pet.id}
           onAdoptPet={this.props.onAdoptPet} />
      )}
    </div>
  }
}

export default PetBrowser
