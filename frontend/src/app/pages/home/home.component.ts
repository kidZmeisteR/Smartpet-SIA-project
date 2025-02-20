import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  pets: any[] = [];

  async ngOnInit() {
    const response = await axios.get('http://localhost:5000/api/pets');
    this.pets = response.data;
  }
}
