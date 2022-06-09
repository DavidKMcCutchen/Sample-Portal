import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validationMessages } from 'libs/pipes/src/lib/error-keys.pipe';

@Component({
  selector: 'sample-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isPasswordField = true;
  messages = validationMessages;

  constructor(
    private formBuild: FormBuilder,
    private router: Router
  ) { }

  get passwordIcon(): string {
    return this.isPasswordField ? 'visibility_off' : 'visibility';
  }

  get passwordFieldType(): string {
    return this.isPasswordField ? 'password' : 'text';
  }

  ngOnInit(): void {
    this.initForm();
  }

  registerAttempt() {
    return;
  }

  loginPage() {
    this.router.navigateByUrl('/login')
  }

  private initForm() {
    this.form = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/g
          ),
        ],
      ],
    });
  }

}