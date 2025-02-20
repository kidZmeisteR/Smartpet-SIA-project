import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  async login() {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { 
        email: this.email, 
        password: this.password 
      });
      localStorage.setItem('token', response.data.token);
      alert("Login successful!");
    } catch (error) {
      alert("Login failed!");
    }
  }
}
