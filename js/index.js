//OBJETOS

class Cliente{
    constructor(nombre, dni, membresia, fechaPago){
        this.nombre= nombre;
        this.dni= dni;
        this.membresia= membresia;
        this.fechaPago= fechaPago;
}};

const ARRAY_CLIENTE=[];
let cliente;


const Formulario= document.getElementById("Formulario");
Formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    const nombre=document.getElementById("nombre");
    const dni=document.getElementById("dni");
    const membresia=document.getElementById("membresia");
    const fecha=document.getElementById("fecha")

    cliente=new Cliente(nombre.value,parseInt(dni.value),(membresia.value).toLowerCase(), new Date(fecha.value), )
    ARRAY_CLIENTE.push(cliente);

    Formulario.reset();
});


//CONSTANTES Y VARIABLES
let controlNoPago;
let valor;

//FUNCIONES

function ControlDePago(Cliente){
    let ultimoPago= Cliente;
    let hoy= new Date();
    ultimoPago.setMonth(ultimoPago.getMonth()+1);
    if(ultimoPago<hoy)
    { return 1; 
    }else{
        return 0;
    }
};

function Membresia(cliente){
    if(cliente.membresia=="musculacion"){
        return 12000;}
    else if(cliente.membresia=="crossfit"){
        return 13500;}
        else{
            return 9000;
        }
};

function AvisoDePago(ControlNoPago,cliente,valor){
    if(ControlNoPago==0){
        console.log(`El ciente con DNI ${cliente.dni} llamado ${cliente.nombre} 
        debe abonar el total de $${valor} correspondiente a su membresia de ${cliente.membresia} `);
    }else{
        console.log(`El ciente con DNI ${cliente.dni} llamado ${cliente.nombre} 
        debe abonar el total de $${(valor*0.1)+valor} por falta de pago debido a su incumplimiento en el pago 
        de la cuota en los ultimos dias correspondiente a su membresia de ${cliente.membresia} `);
    }};
    

controlNoPago= ControlDePago(cliente.fechaPago);

valor= Membresia(cliente);

AvisoDePago(controlNoPago, cliente,valor);


//----------------TIENDA------------------------

//lista de productos disponibles en mi carrito

const productos = [
    {id:1, nombre:"Proteina",imagen:"../assets/img/1.webp", precio:13000},
    {id:2, nombre:"Creatina",imagen:"../assets/img/2.jpg", precio:10000},
    {id:3, nombre:"Pre-entreno",imagen:"../assets/img/3.jpeg", precio:9000},
];

//funcion que agregue porductos a un carrito

function agregarACarrito(id,nombre,precio){
    
    const carrito= JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({id, nombre, precio});
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    
}
;

function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito'))|| [];
    const lista_productos = document.getElementById('listaProductos');
    const totalElement = document.getElementById('total');
    let total = 0;

    lista_productos.innerHTML = '';

    carrito.forEach(producto => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${producto.nombre}</span>
            <span>$${producto.precio}</span>
        `;
        lista_productos.appendChild(listItem);

        total += producto.precio;

    });

    totalElement.textContent = total;
};
//function para vaciar el carrito

function vaciarCarrito(){
    localStorage.removeItem('carrito');
    mostrarCarrito();

}

//funcion para generar tarjetas de productos

function generarTarjetaProductos() {
    const productosContainer = document.getElementById('productos');

    productos.forEach(producto => {
        const productoElement = document.createElement('div' );
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio} </p>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <button onclick="agregarACarrito(${producto.id},'${producto.nombre}', ${producto.precio})"> Agregar al carrito </button>
        `;
        productosContainer.appendChild(productoElement);
    });
};

generarTarjetaProductos();
