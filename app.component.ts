import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'app';
  anytext: string = "";
  submitted: boolean = false;


  onSubmit(){
    this.submitted = true;
  }
}