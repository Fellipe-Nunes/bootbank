import React from 'react'
import '../../assets/css/side.drawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer'
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/contatos">Contatos</Link></li>
        <li><Link to="/transferencias">Transferências</Link></li>
      </ul>
    </nav>
  )

}

export default SideDrawer