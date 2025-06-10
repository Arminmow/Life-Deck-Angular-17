import { Component } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NzDrawerModule, NzButtonModule, NzMenuModule, SidebarMenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  activities = [
    {
      title: 'Chess',
      timeSpent: '20h 50m',
      subActivities: [
        {
          title: 'Playing Chess',
          timeSpent: '20h',
        },
        {
          title: 'Learning Chess',
          timeSpent: '50m',
        },
      ],
    },
    {
      title: 'Gaming',
      timeSpent: '11h',
      subActivities: [
        {
          title: 'Warhammer 2',
          timeSpent: '10h',
        },
        {
          title: 'GTA SA',
          timeSpent: '1h',
        },
      ],
    },
  ];
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
