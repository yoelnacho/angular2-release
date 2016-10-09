// agregar input para tomar el parámetro que pasan entre componentes
import { Component, Input } from '@angular/core';

@Component({
    selector: 'caca',
    template: `<h1>{{title}}</h1>`
})

export class CacaComponent {
    // recibir el parámetro del componente
    @Input()
    private title: string;
}
