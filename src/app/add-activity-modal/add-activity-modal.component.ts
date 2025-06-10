import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-add-activity-modal',
  standalone: true,
  imports: [NzButtonModule],
  templateUrl: './add-activity-modal.component.html',
  styleUrl: './add-activity-modal.component.scss',
})
export class AddActivityModalComponent {
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  hideModal(): void {
    this.isVisible = false;
  }
}
