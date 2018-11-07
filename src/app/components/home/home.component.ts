import { Component, OnInit } from '@angular/core';
import { HomeServices } from '../../services/home.services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [HomeServices]
})
export class HomeComponent implements OnInit {
    title: string;
    articulos: any;

    constructor(
        private _homeServices: HomeServices
    ) {
        this.title  = 'Lista artículos obtenido usando Servicio http y Observables desde https://jsonplaceholder.typicode.com/posts';
    }

    ngOnInit() {
        this._homeServices.getArticulos().subscribe(
            result => {
                this.articulos = result;
            },
            error => {
                const errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }


}
