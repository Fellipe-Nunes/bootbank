import React, { Component } from 'react'
import './App.css'
import LoginForm from './components/Login/Form'
import { Link } from 'react-router-dom'
import { Jumbotron } from 'reactstrap'

class Login extends Component {
 render() {
   return (
    <div style={{height:'100%'}}>
      <main>
        <Jumbotron>
          <h2 className="display-5">Bem Vindo ao BOOT Bank</h2>

          <LoginForm /> 
        <Link to="/cadastros" className="float-right">Faça seu Cadastro</Link>
        </Jumbotron>
      </main>
    </div>    
   )
 }
}
export default Login