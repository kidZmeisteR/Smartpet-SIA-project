import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private router: Router
  ) {}

  async login() {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { 
        email: this.email, 
        password: this.password 
      });
      localStorage.setItem('token', response.data.token);
      alert("Login successful!");
      this.router.navigate(['/home']);
    } catch (error) {
      alert("Login failed!");
    }
  }
}
