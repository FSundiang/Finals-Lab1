import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent {
  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
}

  onSubmit(){
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      } else {
        console.log('Form Not Valid');
    }
  }

}
