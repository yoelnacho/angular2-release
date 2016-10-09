import { Component } from '@angular/core';

// defino los atributos y tipos de valores que contendran
// si voy a utilizar métodos, utilizo una class para definir el modelo de atributos.
export class Example {
    imgUrl: string;
    name: string;
}

// defino los atributos y tipos de valores que contendran
interface Item {
    desc: string;
    selected: boolean;
}

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
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

    // Checklist
    private checklist: Item[] = [];

    update(data: string){
        this.checklist.push({desc: data, selected: false});
    };

    // Hacer una búsqueda por referencia
    delete(item: Item){
        // busco la posición del elemento en el array checklist
        let index = this.checklist.indexOf(item);
        // y si es > 1
        if(index > -1){
            // con splice, lo remuevo del array
            this.checklist.splice(index, 1);
        }
    }
}
