import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../servies/data.service';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.setApiUrl('http://localhost:3000/students');
  }
  onSubmit(myForm: any) {
    if (myForm.valid) {
      this.dataService.addItem(myForm.value).subscribe(() => {
        this.router.navigate(['/student']);
      });
    } else {
      // Hiển thị lỗi khi form chưa valid
      Object.keys(myForm.controls).forEach((field) => {
        const control = myForm.controls[field];
        control.markAsTouched();
      });
    }
  }
}

