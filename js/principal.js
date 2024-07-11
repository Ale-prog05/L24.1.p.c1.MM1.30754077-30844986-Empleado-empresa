/* Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%
*/
import CL_empleados from "./CL_empleados.js";
import CL_empresa from "./CL_empresa.js";

let empleado1 = new CL_empleados("Mary", "F");
let empleado2 = new CL_empleados("José", "M");
let empleado3 = new CL_empleados("Carlos", "M");
let empleado4 = new CL_empleados("Pedro", "M");
let empresa = new CL_empresa();
empresa.procesarEmpleados(empleado1);
empresa.procesarEmpleados(empleado2);
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);

let salida = document.getElementById("salida");
salida.innerHTML = `
<h1>Resultados</h1>
<p> cantidad de hombres que trabajan en la empresa: ${empresa.devolverCantHombres()}</p>
<p> porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentaje()}%</p>
`