import React, { createContext, useState } from "react";




export const cartContext = createContext();

export default function CartProvider({children}){

    // const [total, setTotal] = useState(0);
    // const [totalCantidad, setTotalCantidad] = useState(0);
    // const [actualizarCantidad, setActualizarCantidad] = useState(false);
    const [carro, setCarro] = useState([]);

    function agregarAlCarro (productos, cantidad){
        if(estaEnElCarro(productos.id)){
            const indexItem = carro.findIndex(x => x.item.id === productos.id);
            carro[indexItem].cantidad = carro [indexItem].cantidad + cantidad;
            setCarro([...carro]);
        } else {
            setCarro([...carro, {item: productos, cantidad}]);
        }
    }

    function estaEnElCarro(id){
        return carro.some(x => x.item.id === id)
    } 

    function borrarElemento(id){
        const borrar = carro.filter(elemento => elemento.item.id !== id);
        // setActualizarCantidad(true);
        setCarro(borrar);
    }

    function borrarCarro(){
        setCarro([]);
    }

    function sumarCarro(){
        // return (carro.length > 0)? carro.map(item => item.item.precio * item.cantidad).reduce((a,b) => a+b) : 0;
        return carro.reduce((a, b) => a + (b.item.precio * b.cantidad), 0);
    }

    function sumarCantidad(){
        // return (carro.length > 0)? carro.map(item => item.cantidad).reduce((a,b)=> a+b): 0;
        return carro.reduce((a, b) => a + b.cantidad, 0);
    }
    
    
    return(
        <cartContext.Provider value={{carro, setCarro, agregarAlCarro, borrarCarro, borrarElemento, sumarCarro, sumarCantidad}}>
            {children}
        </cartContext.Provider>
    )
}