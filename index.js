//OBJETOS

class Cliente{
    constructor(nombre, dni, membresia, fechaPago){
        this.nombre= nombre;
        this.dni= dni;
        this.membresia= membresia;
        this.fechaPago= fechaPago;
}};

class membresias{
    constructor(membresia,cliente,precio,precioRecargo){
        this.membresia=membresia;
        this.cliente=cliente;
        this.precio=precio;
        this.precioRecargo=precioRecargo;
}};

let PrimerCliente=new Cliente("Tomas",42589706,"free", 
    new Date(prompt("Ingrese año de ultimo pago"),
    prompt("Ingrese mes de ultimo pago")-1,
    prompt("Ingrese dia de ultimo pago")));
    // prompt("Ingrese su nombre completo"),
    // parseInt(prompt("Ingrese su dni")),
    // prompt("Ingrese su tipo de membresia"),
    // prompt("Ingrese su ultima fecha de pago"),);

const MEM_MUSCULACION=new membresias("Musculacion",PrimerCliente, 12000, (12000+(12000*0.1)));
const MEM_CROSSFIT=new membresias("CrossFit",PrimerCliente, 13500, (13500+(13500*0.1)));
const MEM_FUNCIONAL=new membresias("Funcional",PrimerCliente, 9000, (9000+(9000*0.1)));


//CONTASNTES Y VARIABLES
// const VALOR_CUOTA = 12000;
// const VALOR_RECARGO= (VALOR_CUOTA+(VALOR_CUOTA*0.1));
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
    if(cliente.membresia=="Musculacion"){
        return 12000;}
    else if(cliente.membresia=="CrossFit"){
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