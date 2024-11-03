import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.registerForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    const form = this.formBuilder.group(
      {
        recycleAction: ['', [Validators.required]],
        name: [
          '',
          [
            Validators.required,
            // Validators.minLength(3),
            // Validators.maxLength(50),
            // Validators.pattern(/^[a-zA-Z\s]+$/) // Only letters and spaces
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            // Validators.minLength(8), // Minimum 8 characters
            // Validators.maxLength(20), // Maximum 20 characters
            // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)
            // At least one letter and one number, can include special characters
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            // Validators.minLength(8),
            // Validators.maxLength(20)
          ]
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]{10}$/) // Exactly 10 digits
          ]
        ],
        address: [
          '',
          [
            Validators.required,
            // Validators.minLength(5),
            // Validators.maxLength(100)
          ]
        ],
        addressNumber: [''],
        neighborhood: [''],
        complement: [''],
        zipcode: [
          '',
          [
            Validators.required,
            // Validators.pattern(/^[0-9]{5,6}$/) // 5 to 6 digits
          ]
        ],
        city: [
          '',
          [
            Validators.required,
            // Validators.minLength(2),
            // Validators.maxLength(50),
            // Validators.pattern(/^[a-zA-Z\s]+$/) // Only letters and spaces
          ]
        ],
        state: [
          '',
          [
            Validators.required,
            // Validators.minLength(2),
            // Validators.maxLength(50),
            // Validators.pattern(/^[a-zA-Z\s]+$/) // Only letters and spaces
          ]
        ],
      },
      {
        validators: this.passwordMatchValidator // Apply the custom validator to the form group
      }
    );
    return form;
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

  register() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      this.router.navigate(['home']);
    } else {
      console.log('Form is invalid');
    }
  }
}
