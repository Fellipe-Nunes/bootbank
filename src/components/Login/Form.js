import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { get } from 'lodash'
import swal from 'sweetalert'
import submitLogin from '../Submit/Login'
import { bake_cookie } from 'sfcookies'

class LoginForm extends Component {

state = {
  cpf: '',
  password: ''

}

handleChangeCpf = event => {
  this.setState({ cpf: event.target.value })
}

handleChangePassword = event => {
  this.setState({ password: event.target.value })
}



logar = async event => {
  event.preventDefault()
  const cpf = get(this.state, 'cpf')
  const password = get(this.state, 'password')

  if (cpf.length <= 1) {
    swal('Erro', 'Verifique o campo CPF.', 'error')
    return false
  }

  if (password.length <= 1) {
    swal('Erro', 'Verifique o campo Senha.', 'error')
    return false
  } 

  const dataLogin = {
    cpf: cpf,
    password: password,
    collection: "usersAuth"
  }


  const user = await submitLogin(dataLogin)
  console.log('user: ', user)
  if (user.length > 0) {
    // console.log('user._id :', user[0]._id)
    // console.log('user.name :', user[0].name)

    bake_cookie('logado', true)
    bake_cookie('id', user[0]._id)
    bake_cookie('name', user[0].name)
    bake_cookie('cpf', user[0].cpf)
    bake_cookie('password', user[0].password)

    swal({
      title: 'Saudações',
      text: 'Olá, '+ user[0].name +'!!',
      icon: 'success'
    }).then(function() {
      window.location.replace('/Home')
    });
  } else {
    swal('Erro', 'CPF e/ou Senha informados, não localizados.', 'error')
  }
}


render() {
    return (
      <div>
      <Form>
        <FormGroup>
         <Label for="cpf">CPF</Label>      
         <Input name="cpf" id="cpf" type="cpf" placeholder="Cpf" value={this.state.value} onChange={this.handleChangeCpf} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Senha</Label>
          <Input type="password" placeholder="Senha" value={this.state.value} onChange={this.handleChangePassword} />
        </FormGroup>
        <FormGroup>
          <Button color="primary" onClick={this.logar}>Entrar</Button>
        </FormGroup>
      </Form>
      </div>
    )
  }
}
export default LoginForm