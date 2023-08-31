import { useState,useEffect } from "react"
import data from "../data/products.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    
    useEffect (() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        promise.then((data) => setProducts(data));

    }, [])

   
    return <div>{props.greeting}
    <div> {products.map(products => 
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src={products.imagen} />
         <Card.Body>
           <Card.Title>{products.nombre}</Card.Title>
           <Card.Text>
           {products.descripcion}
           </Card.Text>
           <Card.Text>{products.precio}</Card.Text>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card> )}</div>
    </div>
}