import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this line

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  expenses = [
    { description: 'Groceries', amount: 50 },
    { description: 'Utilities', amount: 100 },
    // Add more expenses as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

  editExpense(expense: any): void {
    // Implement edit logic here
  }

  deleteExpense(id: number): void {
    // Implement delete logic here
  }
}