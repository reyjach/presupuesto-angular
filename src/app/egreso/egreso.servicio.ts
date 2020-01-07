import { Egreso } from './egreso.model';

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta Depto",900),
        new Egreso("Ropa",200)
    ]

    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso)//indeof va a regresar el indice donde esta alojado el valor de la matriz
        this.egresos.splice(indice,1);
    }
}