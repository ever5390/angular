import { Injectable } from '@angular/core';
import { ContactoModel } from '../entities/contacto.model';

@Injectable()
export class ContactoServices {

    public lista: Array<any> = [];

    constructor() {
        this.lista = [
            new ContactoModel(1, 'contacto 1', 28, 'mecánico', true),
            new ContactoModel(2, 'contacto 2', 23, 'administrador', false),
            new ContactoModel(3, 'contacto 3', 25, 'electricista', true),
            new ContactoModel(4, 'contacto 4', 18, 'Ingeniero', false)
        ];
    }

    obtenerCodigoFinal() {
        let codigo = 0;
        codigo = this.lista.length;
        return codigo;
    }
    // CRUD CONTACTS
    getContacts() {
        return this.lista;
    }

    saveContact(contacto: any) {
        this.lista.push(contacto);
    }

    deleteContact(index: number) {
        this.lista.splice(index, 1);
    }

    updateContact(index: number, contacto: any) {
        this.lista[index] = contacto;
    }

}
