import React, { Component } from 'react'
import '../src/assets/css/App.css'
import Menu from './components/Menu/Menu'
import Users from './components/User/Form'
import { Jumbotron } from 'reactstrap'

class Cadastros extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Menu />
        <main className="mainBox">
          <Jumbotron>
            <h2 className="display-5">Cadastre-se</h2>
            <Users />
          </Jumbotron>
        </main>
      </div>
    )
  }
}
export default Cadastros