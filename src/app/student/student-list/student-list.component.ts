import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../servies/data.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  constructor(private dataSerives: DataService) {
    this.dataSerives.setApiUrl("http://localhost:3000/students")
  }
  students: any;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataSerives.getItems().subscribe(data => {
      this.students = data;
    })
  }
  
  deleteUser(id: any) {
    this.dataSerives.deleteItem(id).subscribe(() => {
      this.loadData();
    })
  }
}
