import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  title = 'form-app';
  userName: string = "";
  formdata: FormGroup = new FormGroup({
    userName: new FormControl("")
});

  onClickSubmit(data: { userName: string }) {
    this.userName = data.userName;
  }
}
