import { Routes } from '@angular/router';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'student',component:StudentListComponent},
    {path:'student-add',component:StudentAddComponent},
];
