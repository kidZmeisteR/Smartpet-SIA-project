import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(
    private router: Router
  ) {}

  async signup() {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      alert("Signup successful!");
      this.router.navigate(['/login']);
    } catch (error: any) {
      alert("Signup failed: " + error.response?.data?.error);
    }
  }
}
