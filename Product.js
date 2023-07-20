 import React,{useContext} from 'react';
 import { ecom } from '../../App';
 
 function Product() {

  
  const {cart, setCart} = useContext(ecom)
    
    const product =[
      {id:1, name:"Product A",price:20},
      {id:2, name:"Product B", price:35},
      { id:3,name:"product C", price:40},
      {id:4, name :"Product D", price:60},
    ];
    

    function handle(e ,prod){
      e.preventDefault();
    setCart([...cart, prod]) 
     
    }
     
     console.log(cart)

       return(
     <div>

       <div className='product'>
      {
        
        product.map((prod, index) => {
          return (

            <div key={index}>
            <h1>{prod.id}</h1>
        
            <p>{prod.price}</p>

            <a href='#!' onClick={e =>{handle(e,prod)}}> Add to wish</a>
            </div>
            
            
        )

          })
      }
      </div>
     </div>
       )
  
    }
 
 export default Product ; 