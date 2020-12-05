import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/index.css'
import App from './App'
import Cadastros from './Cadastros'
import Contatos from './Contatos'
import Erro404 from './Erro404'
import Home from './Home'
import Logoff from './Logoff'
import Transferencias from './Transferencias'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastros" component={Cadastros} />  
            <Route path="/contatos" component={Contatos} />
            <Route path="/home" component={Home} />   
            <Route path="/logoff" component={Logoff} />                    
            <Route path="/transferencias" component={Transferencias} />            
            <Route path='*' component={Erro404} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'))

    serviceWorker.unregister()