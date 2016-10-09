"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// defino los atributos y tipos de valores que contendran
// si voy a utilizar métodos, utilizo una class para definir el modelo de atributos.
var Example = (function () {
    function Example() {
    }
    return Example;
}());
exports.Example = Example;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular 2';
        this.mostrar1 = true;
        this.mostrar2 = false;
        this.lista = [
            { desc: 'Elemento 1', check: true },
            { desc: 'Elemento 2', check: false },
            { desc: 'Elemento 3', check: false },
            { desc: 'Elemento 4', check: true }
        ];
        this.eg = {
            imgUrl: 'assets/logo.png',
            name: 'Angular 2'
        };
        // Checklist
        this.checklist = [];
    }
    // fn que toma el valor al hacer click en el botón
    AppComponent.prototype.setName = function (title) {
        this.title = title;
    };
    AppComponent.prototype.update = function (data) {
        this.checklist.push({ desc: data, selected: false });
    };
    ;
    // Hacer una búsqueda por referencia
    AppComponent.prototype.delete = function (item) {
        // busco la posición del elemento en el array checklist
        var index = this.checklist.indexOf(item);
        // y si es > 1
        if (index > -1) {
            // con splice, lo remuevo del array
            this.checklist.splice(index, 1);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map