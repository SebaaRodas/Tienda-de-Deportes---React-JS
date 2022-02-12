// import React, {useState, useEffect} from "react";
// import { useParams } from "react-router-dom";
// import ItemList from "./ItemList";
// import { Link } from "react-router-dom";

// export default function Marcas(){

//     const {marca} = useParams();
//     console.log(marca)
//     const [marcas, setMarcas] = useState([]);

//     const stockMarcas = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, nombre: "Remera", stock: 10, marca: "adidas", descripcion: "Tela de algodón, súper cómodas.",precio: 3000, pictureUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/bac60bc110584f7aafb4ac4500f4c67f_9366/Remera_adidas_Designed_To_Move_Logo_Grande_Blanco_GN1479_01_laydown.jpg" },
//                 { id: 2, nombre: "Remera", stock: 4, marca: "nike", descripcion: "Tela de algodón, súper cómodas.", precio: 3500, pictureUrl: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc6f4b11c/products/NI_CJ2055-010/NI_CJ2055-010-1.JPG" },
//                 { id: 3, nombre: "Remera", stock: 5, marca: "puma", descripcion: "Tela de algodón, súper cómodas.", precio: 2500, pictureUrl: "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw88ff61a7/products/PU_852419-01/PU_852419-01_1.JPG" },
//                 { id: 4, nombre: "Remera", stock: 5, marca: "reebok", descripcion: "Tela poliéster, ideales para entrenar.", precio: 2000, pictureUrl: "https://megasports.vteximg.com.br/arquivos/ids/185667-1000-1000/41700788001_0.jpg?v=637261041293730000" }
//             ]);
//         }, 1000)
//     })

//     useEffect(() => {
//         stockMarcas
//             .then(item => {
//                 setMarcas(item.filter(item => item.marca == `${marca}`));
//             })
//     }, [marca])
//     console.log(marcas);
//     return(
//         <>
//             <ItemList lista={marcas} />
//         </>
//     )

// }