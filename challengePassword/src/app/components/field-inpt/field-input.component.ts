import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent {

  @Output() showPassword = new EventEmitter<boolean>();
  @Input() hidePassword = false;
  @Input() label!: string
  @Input() errorMessage!: string
  input: any

  @ContentChild(FormControlName) control!: FormControlName

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit(): void {
    this.input = this.control
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com o formControlName')
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

  showDigit() {
    this.hidePassword = !this.hidePassword;
    this.showPassword.emit(this.hidePassword);
  }
}
