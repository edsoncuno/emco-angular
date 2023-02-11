import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Gestionar',
        items: [
          {
            label: 'Item',
            command: () => { this.router.navigateByUrl('/gestionar/item') }
          },
          {
            label: 'Stakeholder',
            command: () => { this.router.navigateByUrl('/gestionar/stakeholder') }
          }
        ]
      }
    ];
  }
}