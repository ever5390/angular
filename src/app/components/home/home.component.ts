import { Component, OnInit } from '@angular/core';
import { HomeServices } from '../../services/home.services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [HomeServices]
})
export class HomeComponent implements OnInit {
    title: string;

    constructor(
        private _homeServices: HomeServices
    ) {
        this.title  = 'Pagina Principal';
    }

    ngOnInit() {
        this._homeServices.getArticulos().subscribe(
            result => {
                console.log(result);
            },
            error => {
                const errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }


}
