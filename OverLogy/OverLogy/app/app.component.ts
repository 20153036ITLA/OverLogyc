import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'prueba',
  template: `<h1>Hola {{name}}</h1>
            <ul>
           <li *ngFor="let persona of resultado">
            {{persona.id + " " + persona.Nombre}}    
            </li>
            </ul>
             `,
})
export class AppComponent  implements OnInit   {

    constructor(private http : Http) {}
    resultado: string[];
    name = 'Efrain';

    ngOnInit(): void {
        this.http.get('api/OLApi').subscribe(data => {
            this.resultado = JSON.parse(data.text());
       });
    }
}

