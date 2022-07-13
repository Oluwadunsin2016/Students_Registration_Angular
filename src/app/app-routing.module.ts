import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';

import { RegistrationComponent } from './registration/registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

import { UserstodoComponent } from './userstodo/userstodo.component';


const routes: Routes = [
{path:'', redirectTo: '/home', pathMatch: 'full'},
{path:'home', component: HomeComponent},
{path:'registration', component: RegistrationComponent},
{path:'list-of-students', component:ListOfStudentsComponent},
{path:'student-details', component: StudentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
