import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// mis vistas
import { GestionarItemComponent } from './pages/gestionar-item/gestionar-item.component'
import { GestionarStakeholderComponent } from './pages/gestionar-stakeholder/gestionar-stakeholder.component';

// la ruta a las vitas
const routes: Routes = [
  { path: 'gestionar/item', component: GestionarItemComponent },
  { path: 'gestionar/stakeholder', component: GestionarStakeholderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
