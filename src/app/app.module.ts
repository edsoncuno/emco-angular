import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//module
import { PrimeModule } from './modules/prime.module'

// views
import { GestionarStakeholderComponent } from './pages/gestionar-stakeholder/gestionar-stakeholder.component';
import { GestionarItemComponent } from './pages/gestionar-item/gestionar-item.component';

//ngModule
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// components
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionarStakeholderComponent,
    GestionarItemComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // prime module
    PrimeModule,
    //ngModule
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
