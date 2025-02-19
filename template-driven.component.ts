import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

}
