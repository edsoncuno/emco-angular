import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
    exports: [
        InputTextModule,
        MenubarModule,
        ButtonModule,
    ]
})

export class PrimeModule { }