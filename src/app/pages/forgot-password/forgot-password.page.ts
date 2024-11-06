import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@capacitor/app';
import { hide, LoadingAction, show } from 'src/store/loading/loading.action';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService,
    private toastController: ToastController
  ) { 
    this.forgotPasswordForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: [
        '',
        [
          Validators.required,
        ]
      ],
    },
    {
      validators: this.passwordMatchValidator // Apply the custom validator to the form group
    });
  }

  // Custom Validator Function
  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
  
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null); // Clear error if they match
    }
    
    return null;
  }

  forgotPassword() {
    this.store.dispatch(show());
    if (this.forgotPasswordForm.valid) {
      this.store.dispatch(show());
      
      this.authService.setNewPassword(this.forgotPasswordForm.value).subscribe(
        async (resp) => {
          console.log('Forgot password response', resp);
          const toast = await this.toastController.create({
            position: 'top',
            color: 'success',
            message: resp.message,
            duration: 3000
          });
          await toast.present();
          this.store.dispatch(hide());
          this.router.navigate(['/login']);
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
    }
     else {
      console.log('Form is invalid');
    }
  }
}
