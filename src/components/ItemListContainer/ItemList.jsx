import React from "react";
import Item from "./Item"

export default function ItemList(props) {
    return (
        <>
            {props.lista.length > 0 ?
                <>
                    {props.lista.map(item => {
                        return <Item prod={item} key={item.id} />
                    })
                    }
                </>
                :
                <>
                    <br />
                    Cargando...
                </>
            }
        </>
    )

}