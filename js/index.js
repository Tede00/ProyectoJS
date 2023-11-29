//OBJETOS

class Cliente{
    constructor(nombre, dni, membresia, fechaPago){
        this.nombre= nombre;
        this.dni= dni;
        this.membresia= membresia;
        this.fechaPago= fechaPago;
}};


let PrimerCliente=new Cliente(prompt("Ingrese su nombre completo"),
    parseInt(prompt("Ingrese su dni")),
    prompt("Ingrese su tipo de membresia (Musculacion-Crossfit-Funcional)").toLowerCase(),
    new Date(prompt("Ingrese año de ultimo pago"),
    prompt("Ingrese mes de ultimo pago")-1,
    prompt("Ingrese dia de ultimo pago")));
    // prompt("Ingrese su nombre completo"),
    // parseInt(prompt("Ingrese su dni")),
    // prompt("Ingrese su tipo de membresia (Musculacion-CrossFit-Funcional)"),
    // prompt("Ingrese su ultima fecha de pago"),);

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
    

controlNoPago= ControlDePago(PrimerCliente.fechaPago);

valor= Membresia(PrimerCliente);

AvisoDePago(controlNoPago, PrimerCliente,valor);