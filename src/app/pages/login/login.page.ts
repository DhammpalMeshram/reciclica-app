import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { hide, LoadingAction, show } from 'src/store/loading/loading.action';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastController } from '@ionic/angular';

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
    private authService: AuthService,
    private toastController: ToastController,
  ) { 
    this.loginForm = this.createForm();
    
  }

  ngOnInit() {}

  createForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(show());
      this.authService.login(this.loginForm.value).subscribe(
        async (resp) => {
          console.log('Login response', resp);
          const toast = await this.toastController.create({
            position: 'top',
            color: 'success',
            message: resp.message,
            duration: 3000
          });
          await toast.present();
          this.store.dispatch(hide());
          this.router.navigate(['home']);
        },
        async (error) => {
          const toast = await this.toastController.create({
            position: 'top',
            color: 'danger',
            message: error.message,
            duration: 3000
          });
          await toast.present();
          this.store.dispatch(hide())
        }
      );
    } else {
      console.log('Form is invalid');
    }

  }
}
