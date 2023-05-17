import React, {useState, useEffect} from 'react';


const CompraContext = React.createContext();

export function CompraProvider(props){
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "0", amount: 10, description: "Terreno",cards: 0, storage:1, guarderia:0, sum:0, user: {},sku:'' });
}


