import React, { useEffect, useState } from 'react'

const Products = () => {

    const [producs, setProducts] = useState([]);
    async function fetching(url) {
        const Response = await fetch(url);
        const data = await Response.json();
        console.log(data);
        setProducts(data);

    }
    useEffect(() => {
        fetching("https://fakestoreapi.com/products");
    })
    return (
        <div className='productsWrapper'>
            {producs.map(item => (
                <div className='card' key={item.id}>
                    <img src={item.image} alt="" srcset="" />
                  
                    <h4>{item.title}</h4>
                 
                    <h4>{item.price}</h4>
                    <button className='btn'>Add</button>
         
                </div>
            ))
            }
        </div>
    )
}

export default Products
