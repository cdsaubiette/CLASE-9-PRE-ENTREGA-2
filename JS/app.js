
class Producto {
    constructor(nombre, precio, imagen) {
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    
    mostrarInfoProducto() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}, Imagen: ${this.imagen}`);
    }


    esPrecioValido() {
        return this.precio > 0;
    }
}

// Array de productos
const productos = [
    new Producto("VueJS", 25, "img/1.jpg"),
    new Producto("AngularJS", 20, "img/2.jpg"),
    new Producto("ReactJS", 27, "img/3.jpg"),
    new Producto("Redux", 28, "img/4.jpg"),
    new Producto("NodeJS", 29, "img/5.jpg"),
    new Producto("SASS", 21, "img/6.jpg"),
    new Producto("HTML5", 30, "img/7.jpg"),
    new Producto("GitHub", 28, "img/8.jpg"),
    new Producto("BULMA", 26, "img/9.jpg"),
    new Producto("TypeScript", 35, "img/10.jpg"),
    new Producto("Drupal", 22, "img/11.jpg"),
    new Producto("JavaScript", 35, "img/12.jpg"),
    new Producto("GraphQL", 33, "img/13.jpg"),
    new Producto("Wordpress", 32, "img/14.jpg")
];

console.log(productos);



// info productos
productos.forEach(producto => producto.mostrarInfoProducto());



// array nombres de productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);



// productos = precio válido?
productos.forEach(producto => {
    if (!producto.esPrecioValido()) {
        console.error(`El producto ${producto.nombre} tiene un precio inválido.`);
    }
});



// Simula carrito 
function agregarAlCarrito(producto) {
    if (producto.esPrecioValido()) {
        console.log(`Producto ${producto.nombre} agregado al carrito.`);
    } else {
        console.log(`No se puede agregar ${producto.nombre} al carrito. Precio inválido.`);
    }
}


agregarAlCarrito(productos[0]); // VueJS
agregarAlCarrito(productos[2]); // ReactJS