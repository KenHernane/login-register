import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  loginForm!:FormGroup;
  isSubmitted = false;
  constructor(private formBuilder:FormBuilder) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.max(64), Validators.maxLength(64), Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.min(8), Validators.max(64), Validators.maxLength(64), Validators.minLength(4)]]
    });
  }
  get fc() {
    return this.loginForm.controls;
  }
  submit() {
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      alert("Error");
    }
    else {
      alert (`Username: ${this.fc['username'].value}, Password: ${this.fc['password'].value}`);
    }

  }
}
