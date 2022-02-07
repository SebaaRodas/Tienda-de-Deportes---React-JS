import React, { createContext, useState } from "react";



export const cartContext = createContext();

export default function CartProvider({children}){

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
        setCarro(borrar);
    }

    function borrarCarro(){
        setCarro([]);
    }

    return(
        <cartContext.Provider value={{carro, setCarro, agregarAlCarro, borrarCarro, borrarElemento}}>
            {children}
        </cartContext.Provider>
    )
}