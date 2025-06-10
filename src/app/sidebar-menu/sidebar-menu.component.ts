import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [NzMenuModule , CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  @Input() activities: any;
}
