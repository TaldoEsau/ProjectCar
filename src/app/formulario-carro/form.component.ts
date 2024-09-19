import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'store-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  Form: FormGroup;
  formSubmitted: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      nomecarro: [''],
      marcacarro: [''],
      cidade: [''],
      Valor: [''],
      corcarro: [''],
      vendedor: ['']
    });
  }

  onSubmit() {
    if (this.Form.valid) {
      this.formSubmitted = true; 
      this.Form.reset(); 
    } else {
      alert('Preencha todos os campos.');
    }
  }
}
