import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.loginForm = this.createForm();
    
  }

  ngOnInit() {
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.router.navigate(['home']);
    } else {
      console.log('Form is invalid');
    }
  }
}
