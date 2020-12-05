import React, { Component } from 'react'
import '../src/assets/css/app.css'
import Menu from './components/menu/menu'
import Users from './components/user/user.form'
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