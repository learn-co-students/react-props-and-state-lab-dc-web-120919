import React from 'react'

class Pet extends React.Component {
  render() {
    console.log("I'm a pet!!", this.props)
    // debugger
    let {onPet: {name, age, type, weight, isAdopted, gender, id}} = this.props
    return (
      <div className="card">
        <div className="content">
          <a href="" className="header">
            {gender === 'female' ? '♀' : '♂' }
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>{`Age: ${age}`}</p>
            <p>{`Weight: ${weight}`}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted === true ? <button className="ui disabled button">Already adopted</button> : <button data-id={`${id}`}className="ui primary button" onClick={()=>{this.props.onAdoptPet(`${id}`)}} > Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet