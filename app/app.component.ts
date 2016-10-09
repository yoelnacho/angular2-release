import { Component } from '@angular/core';

// defino el modelo de datos (el tipo de c/var)
export class Example {
    imgUrl: string;
    name: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})

// Utilizo la classe Example para crear un nuevo modelo.
export class AppComponent {
    title = 'Angular 2';

    mostrar1 = true;
    mostrar2 = false;

    lista = [
        {desc: 'Elemento 1', check: true },
        {desc: 'Elemento 2', check: false },
        {desc: 'Elemento 3', check: false },
        {desc: 'Elemento 4', check: true }
    ]

    eg: Example = {
        imgUrl: 'assets/logo.png',
        name: 'Angular 2'
    };

    // fn que toma el valor al hacer click en el botón
    setName(title:string){
        this.title = title;
    }
}
