import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-danger-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './danger-confirm.component.html',
  styleUrls: ['./danger-confirm.component.css']
})
export class DangerConfirmComponent {
  @Input() header = 'Destructive Action';
  @Input() title = 'Are you sure';
  @Input() body = 'Proceed with action ?';

  @Output() confirm = new EventEmitter<boolean>()

  onClick(confirmation: boolean) {
    this.confirm.emit(confirmation);
  }
}
