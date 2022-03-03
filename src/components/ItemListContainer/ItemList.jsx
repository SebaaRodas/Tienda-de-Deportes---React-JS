import React from "react";
import Item from "./Item"

export default function ItemList({lista}) {

    return (
        <>
            {lista.length > 0 ?
                <>
                    {lista.map(item => {
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