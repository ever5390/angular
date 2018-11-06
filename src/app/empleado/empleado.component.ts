import { Component } from '@angular/core';
//Importamos las clases que creamos previamente.

import { Empleado } from './empleado';
import { checkNoChanges } from '@angular/core/src/render3/instructions';


@Component({
    selector : 'empleado',
    templateUrl : 'empleado.component.html',
    styleUrls : ['./empleado.component.css']
}) 
export class EmpleadoComponent {
    //Se crean las propiedades de la clase.
    public numero : number;
    public mayorEdad : boolean;
    public arreglo: Array<any> =  []; 
    public empleado : Empleado;
    public trabajadores: Array<Empleado>;
    public activado : boolean;
    public color : string;
    public color_seleccionado : string;

    constructor(){
        //Se inicializan las propiedades.
        this.arreglo = ['Hola',2,'Objeto2'];
        this.empleado = new Empleado('ever', 28, 'gerente', true);
        this.trabajadores = [
            new Empleado("Junior",30,"secretario",false),
            new Empleado("Rosales",35,"jefe",true),
            new Empleado("Antonio",20,"PM",false),
            new Empleado("Gerardo",35,"QA",true),
            new Empleado("Gomez",38,"Sitemas",false),
            new Empleado("Ana",35,"SEO",true)
        ];
        console.log("CONSTRUCTOR: " + this.empleado);
        this.activado = false;
        this.color = "green";
        this.color_seleccionado = "#ccc";
    }

    ngOnInit(){
        console.log("OnInit");  
    }

    activar(){
        this.activado = !this.activado;
        console.log(this.empleado);
    }
}