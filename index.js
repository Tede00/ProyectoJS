//OBJETOS

class Cliente{
    constructor(nombre, dni, membresia, fechaPago){
        this.nombre= nombre;
        this.dni= dni;
        this.membresia= membresia;
        this.fechaPago= fechaPago;
}};

let PrimerCliente=new Cliente("Tomas",42589706,"free", 
    new Date(prompt("Ingrese año de ultimo pago"),
    prompt("Ingrese mes de ultimo pago")-1,
    prompt("Ingrese dia de ultimo pago")));
    // prompt("Ingrese su nombre completo"),
    // parseInt(prompt("Ingrese su dni")),
    // prompt("Ingrese su tipo de membresia"),
    // prompt("Ingrese su ultima fecha de pago"),);


//CONTASNTES Y VARIABLES
const VALOR_CUOTA = 12000;
const VALOR_RECARGO= (VALOR_CUOTA+(VALOR_CUOTA*0.1));
let controlNoPago;

//FUNCIONES

function ControlMembresia(Cliente){
    let ultimoPago= Cliente;
    let hoy= new Date();
    ultimoPago.setMonth(ultimoPago.getMonth()+1);
    if(ultimoPago<hoy)
    { return 1; 
    }else{
        return 0;
    }
};

function AvisoDePago(ControlNoPago,cliente){
    if(ControlNoPago==0){
        console.log(`El ciente con DNI ${cliente.dni} llamado ${cliente.nombre} 
        debe abonar el total de $${VALOR_CUOTA} correspondiente a su membresia de ${cliente.membresia} `);
    }else{
        console.log(`El ciente con DNI ${cliente.dni} llamado ${cliente.nombre} 
        debe abonar el total de $${VALOR_RECARGO} por falta de pago debido a su incumplimiento en el pago 
        de la cuota en los ultimos dias correspondiente a su membresia de ${cliente.membresia} `);
    }};
    

controlNoPago= ControlMembresia(PrimerCliente.fechaPago);

AvisoDePago(controlNoPago, PrimerCliente);