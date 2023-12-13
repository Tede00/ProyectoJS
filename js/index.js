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