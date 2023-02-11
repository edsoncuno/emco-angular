import { Component } from '@angular/core';

import { Stakeholder } from '../../models/Stakeholder';

@Component({
  selector: 'app-gestionar-stakeholder',
  templateUrl: './gestionar-stakeholder.component.html',
  styleUrls: ["./gestionar-stakeholder.component.scss"]
})

export class GestionarStakeholderComponent {
  loading: boolean = true;
  stakeholders: Stakeholder[] = [];
  showingNewStakeholder = false;

  ngOnInit() {
    this.loading = true;
    this.showingNewStakeholder = false;
    this.stakeholders = [
      { id: 'asd1', name: 'Edson Cuno1', dni: 11111111, ruc: 11111111111, type: 'proveedor' },
      { id: 'asd2', name: 'Edson Cuno2', dni: 11111112, ruc: 11111111112, type: 'proveedor' },
      { id: 'asd3', name: 'Edson Cuno3', dni: 11111113, ruc: 11111111113, type: 'proveedor' },
      { id: 'asd4', name: 'Edson Cuno4', dni: 11111114, ruc: 11111111114, type: 'proveedor' },
    ]
  }

  showNewStakeholder(): void {
    if(this.showingNewStakeholder) {
      this.showingNewStakeholder = false;
    } else {
      this.showingNewStakeholder = true;
    }
  }
}