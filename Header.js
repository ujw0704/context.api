
import React ,{useContext} from 'react'
import { ecom } from '../../App'



function Header() {
    const {cart} = useContext(ecom)

  return (
    <div> 
       <p>Cart{cart.length}</p>
        <h2> welcome to the page</h2>
    </div>
  )
}

export default Header