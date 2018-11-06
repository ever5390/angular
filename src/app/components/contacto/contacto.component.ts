import { Component, OnInit } from '@angular/core';
import { ContactoModel } from '../../entities/contacto.model';
import { ContactoServices } from '../../services/contacto.services';

@Component({
    selector : 'app-contacto',
    templateUrl : './contacto.component.html',
    styleUrls: ['./contacto.component.css'],
    providers: [ContactoServices]
})
export class ContactoComponent implements OnInit {

    title: string;
    indice: number;
    contactoSave: any = {};
    contactoEdit: any = {};
    listaContactos: Array<ContactoModel>;
    formulario: any;
    estadoContratado: boolean;
    codigoFinal: number;

    constructor(
        private _contatoServices: ContactoServices
    ) {
        this.title = 'CRUD CONTACTOS - SERVICIO - INTERMEDIO - FORMULARIO';
        this.listaContactos = [];
        this.indice = null;
        this.estadoContratado = false;
    }

    ngOnInit() {
        this.mostrarContactos();
        this.ultimoCodigo();
    }

    ultimoCodigo() {
        this.codigoFinal = this._contatoServices.obtenerCodigoFinal();
    }

    mostrarContactos() {
        this.listaContactos = this._contatoServices.getContacts();
        return this.listaContactos;
    }

    guardarContacto(form) {
        this.formulario = form;
        // estado-contratado : sea al guardar o editar se almacenará el valor que tenga.
        this.contactoSave.contratado = this.estadoContratado;
        if (this.indice == null) {
            this.codigoFinal++;
            this.contactoSave.id = this.codigoFinal;
            this._contatoServices.saveContact(this.contactoSave);
        } else {
            this._contatoServices.updateContact(this.indice, this.contactoSave);
        }
        this.indice = null;
        this.estadoContratado = false;
        this.contactoSave = {};
        this.formulario.onReset();
        return this.mostrarContactos();
    }

    borrarContacto(index: number) {
        this._contatoServices.deleteContact(index);
        return this.mostrarContactos();
    }

    ubicarContacto(index: number, contacto: any) {
        this.indice = index;
        this.estadoContratado = contacto.contratado;
        this.contactoSave = {};
        this.contactoSave.id = contacto.id;
        this.contactoSave.nombres = contacto.nombres;
        this.contactoSave.edad = contacto.edad;
        this.contactoSave.cargo = contacto.cargo;
    }

    soloNumeros(event) {
        return (event.charCode === 0 || event.charCode === 46) || event.charCode >= 48 && event.charCode <= 57;
    }

    check() {
        this.estadoContratado = !this.estadoContratado;
    }
    // public soloLetrasAndNumeros(e) {
    //     console.log(e);
    //     const key = e.keyCode || e.which;
    //     const tecla = String.fromCharCode(key).toString();
    //     const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'; // Se define todo el abecedario que se quiere que se muestre.
    //     const especiales = [8, 37, 39, 46, 6]; // Es la validación del KeyCodes, que teclas recibe el campo de texto.

    //     let tecla_especial = false;
    //     for (let i in especiales) {
    //         if (key === especiales[i]) {
    //             tecla_especial = true;
    //             break;
    //         }
    //     }
    //     alert(tecla);

    //     if ( letras.indexOf(tecla) === -1 && !tecla_especial) {
    //         alert('no permitida');
    //         return false;
    //       }
    // }

    // public enteros(event) {
    //     return (event.charCode >= 48 && event.charCode <= 57 || event.charCode === 0);
    // }
}
