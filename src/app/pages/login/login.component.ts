import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  signin() {
    this.loading = true;
    localStorage.setItem('authToken', "");
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('authToken', response.access);
        this.router.navigate(['/dashboard']);
        this.loading = false;
      },
      error: () => {
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.loading = false;
      }
    });
  }
  
}
