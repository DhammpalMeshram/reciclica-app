import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent  implements OnInit {
  @Input() message: string = '';
  @Input() field!: AbstractControl | null;
  @Input() error!: string;

  constructor() { }

  ngOnInit() {}

  shouldShow(): boolean {
    return !!this.field?.touched && !!this.field?.errors?.[this.error];
  }

}
