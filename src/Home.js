import React, { Component } from 'react'
import '../src/assets/css/App.css'
import Menu from './components/Menu/Menu'
import { Jumbotron } from 'reactstrap'
import { read_cookie } from 'sfcookies'

class Home extends Component {
  render() {
    const name = read_cookie('name');
    const cpf = read_cookie('cpf');

    return (
      <div style={{ height: '100%' }}>
        <Menu />
        <main className="mainBox">
        <ListGroup>
        <ListGroupItem>Usuário: {name}</ListGroupItem>
        <ListGroupItem>CPF: {cpf}</ListGroupItem>
      </ListGroup>
          <Jumbotron>
            <h2 className="display-5">Bem-vindo ao BOOT Bank</h2>
          </Jumbotron>
        </main>
      </div>
    )
  }
}
export default Home