import React, { Component } from 'react'
import Resizable from '../lib/components/Resizable';


export class App extends Component {
  render() {
    return (
      <div style={{ height: '50vh' }}>
        <Resizable background="blue">
          <p>HELLOO</p>
          <h1>HASDJHASJKDHASKDh</h1>
        </Resizable>
      </div>
    )
  }
}

export default App
