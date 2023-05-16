import React, {useState, useEffect} from 'react';
import useProducto from '../Service/APIproducto';

const CompraContext = React.createContext();

export function CompraProvider(props){
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "0", amount: 10, description: "Terreno",cards: 0, storage:1, guarderia:0, sum:0, user: {},sku:0 });
    const [cargaron, setCargaronProductos]= useState(true);
    const [producto, setProducto]= useState(null)
    const productos = useProducto(); 



useEffect(()=>{
    async function cargarProductos(){
        if(!cargaron){
            setCargaronProductos(false);
            return;
        }

        try{
            const {data: producto} = await productos();
            setProducto(producto);
            setCargaronProductos(true);
        }catch (error){
            console.log(error);
        }
}
cargarProductos(); 
}, []);


}