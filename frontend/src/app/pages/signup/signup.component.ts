import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  async signup() {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      alert("Signup successful!");
    } catch (error: any) {
      alert("Signup failed: " + error.response?.data?.error);
    }
  }
}
