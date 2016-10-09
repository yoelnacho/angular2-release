import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { CacaComponent }   from './commons/caca.component';

@NgModule({
    imports:  [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CacaComponent 
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
