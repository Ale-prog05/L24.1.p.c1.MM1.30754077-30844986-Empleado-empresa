export default class CL_empresa {
 constructor() {
    this.contHombres = 0;
    this.contMujeres = 0;
    this.contGeneral = 0;
}
 procesarEmpleados (emple) {
    this.contGeneral++;
    if(emple.sexo == "M"){
        this.contHombres++;
    }else if (emple.sexo == "F") {
        this.contMujeres++;
    }
 }
   devolverCantHombres () {
    return this.contHombres}


    porcentaje (){
        return (this.contMujeres / this.contGeneral) * 100
    }

}