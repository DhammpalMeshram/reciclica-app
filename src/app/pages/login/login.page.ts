import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { hide, LoadingAction, show } from 'src/store/loading/loading.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
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
    this.store.dispatch(show());
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.router.navigate(['home']);
      this.store.dispatch(hide());

    } else {
      console.log('Form is invalid');
    }

  }
}
