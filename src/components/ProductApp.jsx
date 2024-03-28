import { useState } from "react"

const initProducts = [
    {
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es increible'
    },
    {
        name: 'Iphone 14',
        price: 800,
        description: 'El telefono es increible'
        
    }
]

export const ProductApp = () => {

    const [products, setProducts]= useState(initProducts);

    return(
        <>
        <h1>Hola Mundo</h1>
        <table>
            <thead>
                <th>name</th>
                <th>description</th>
                <th>price</th>
            </thead>
            <tbody>
                {products.map(product =>{
                    return(<tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>)
                })}
            </tbody>
        </table>       
        </>
    )
}