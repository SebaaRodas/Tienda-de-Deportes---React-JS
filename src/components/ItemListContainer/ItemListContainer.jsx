import React from "react";
import './ItemListContainer.css';
import ItemCount from "./ItemCount";



export default function ItemListContainer(props){
    
    return(
        <>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} initial={1} />
        </>
    )
}