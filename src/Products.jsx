import React from 'react'
import './Products.css'
import Pro from './Pro.jsx'
export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one' ,price:'100$'},
    {id:2,title:'product two',desc:'this is product two' ,price:'200$'},
    {id:3,title:'product three',desc:'this is product three' ,price:'300$'},
    {id:4,title:'product four',desc:'this is product four' ,price:'400$'}
];
  return (
  <>
  <section className=' mt-5'>
   
    <div className="container">
      <h2 className='text-center pb-3'>Our Products</h2>
      <div className='row '>

       {products.map((product)=>{
           return <Pro {...product} key={product.id} />
       })}

      </div>
    </div>
  </section>
  </>
  )
}
