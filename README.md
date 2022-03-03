# SPORTS-SHOP

https://www.loom.com/share/b77f5c7f539747b284e98504136e6b0e

## Descripción

Este proyecto es una tienda de deportes, con el fin de practicar e implementar los conocimientos aprendidos en el curso de React Js de Coderhouse. No es de manera publicitaria (debido a que están varias marcas importantes) y los precios no son los correspondientes a la actualidad. 

## Funcionamiento del código:
Breve explicación sobre los componentes que tiene esta app: 
- Navbar = Renderiza la barra de navegación.
- ItemListContainer = Renderiza todos los productos de la tienda, ya sea mediante el home o filtrando por categorías.
- ItemList = Es el encargado de mapear el producto que proviene de la base de datos de firebase. 
- Item = Es el que muestra la card del producto en si, con sus respectivas funciones y diseño. 
- ItemCount = Es el que permite aumentar o descontar la cantidad del producto a seleccionar, siempre y cuando no supere el valor inicial ni el stock máximo. También permite agregar el producto al carro. Esta dentro de Item y de ItemDetail.
- ItemDetail = Muestra el producto de manera más detallada (recordar que tiene las funciones del ItemCount).
- ItemDetailContainer = Renderiza el ItemDetail, cuando el usuario da click en "Ver detalles". 
- Carrito = Mapea los productos agregados al carro (con los totales y cantidades correspondientes) y los renderiza en CartItem. También renderiza el formulario de compra. 
- CartItem = Muestra los productos agregados al carro con su respectivo diseño.
- FinalizarCompra = Muestra el formulario de compra. 
- CartWidget = Muestra el ícono del carrito que va en la navbar.
- Footer = Es decorativo, sin funcionalidades, mostrando logos de algunas redes sociales y el autor de la app.

# HERRAMIENTAS UTILIZADAS
- React JS.
- Create React App.
- React Router Dom.
- Firebase's Firestore 8.8.0
- Sweetalert 2.1.2
- React-Bootstrap.

# INSTALACIÓN
1. Desde un terminal seleccione la carpeta donde quiera almacenar el proyecto.
2. Clonar mi repositorio: git clone https://github.com/SebaaRodas/Tienda-de-Deportes---React-JS.git
3. En la carpeta seleccionada se creará una nueva carpeta con mi código de git, por lo que deberá moverse a dicha carpeta desde la terminal. 
4. Debe instalar las dependencias correspondientes mediante: npm install
5. Para correr el proyecto: npm start
6. Para frenar el proyecto: Ctrl+C

# DEPLOY

Link de la App: 
