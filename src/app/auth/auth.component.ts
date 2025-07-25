import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from './service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly toastr = inject(ToastrService);
  private readonly router = inject(Router);

  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public loginSubmit(): void {
    if (this.loginForm.invalid) {
      this.toastr.error('Todos los campos son obligatorios.', 'Error');
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.toastr.success('Bienvenido', 'Éxito');
      },
      error: (r) => {
        console.log(r);
        if (r.status === 404)
          return this.toastr.error(r.error.message, 'Error');
        if (r.status === 500)
          return this.toastr.error('Error del servidor', 'Error');
        return;
      },
      complete: () => {
        this.router.navigateByUrl('/dashboard/home');
      },
    });
  }
}
