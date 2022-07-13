import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from "@angular/common/http";
import { UserstodoComponent } from './userstodo/userstodo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListOfStudentsComponent } from './list-of-students/list-of-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    UserstodoComponent,
    ListOfStudentsComponent,
    StudentDetailsComponent,
    UpdateComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents:[UpdateComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
