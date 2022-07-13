import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public firstName = '';
  public lastName = '';
  public phoneNumber = '';
  public email = '';
  public file = '';
  public gender = 'Choose';
  public dob = '';
  public rand = '';
  public student:any = '';
  public students: any = [];
  public picture: any = '';

  public id:any=''


myImage!:Observable<any>

 onChange=($event:Event)=>{
  const target= $event.target as HTMLInputElement;
  console.log(target);
  
  const file:File=(target.files as FileList)[0];
  console.log(file);
  this.convertToBase64(file)
  }

  convertToBase64(file: File){
  const observable=new Observable((subscriber:Subscriber<any>)=>{
  this.readFile(file,subscriber)
  })
  observable.subscribe((converted)=>{
  this.myImage=converted
  })
  }
  readFile(file:File, subscriber:Subscriber<any>){
  const fileReader= new FileReader();
  fileReader.readAsDataURL(file)
  fileReader.onload=()=>{
  subscriber.next(fileReader.result)
  subscriber.complete()
  }
  fileReader.onerror=()=>{
  subscriber.error();
  subscriber.complete();
  }
  }


  constructor(public dialogRef: MatDialogRef<UpdateComponent>) {}

  ngOnInit(): void {
   this.id=JSON.parse(localStorage.getItem('myIndex'))
   this.students=JSON.parse(localStorage.getItem('registeredStudents'))
   this.student=this.students.find((val:any,ind:any)=>ind===this.id)
   console.log(this.student);

   this.firstName = this.student.First_Name;
   this.lastName = this.student.Last_Name;
   this.phoneNumber = this.student.Phone_Number;
   this.email = this.student.Email;
  //  this.file = this.student.Image;
   this.gender = this.student.Gender;
   this.dob = this.student.Date_of_Birth;
   this.rand = this.student.Matric_Number;
   
  }


  update=()=>{
  if (this.file=='') {
    this.picture=this.student.Image
  }else{
  this.picture=this.myImage
  }
  let updatedStudent={"First_Name":this.firstName, "Last_Name":this.lastName, "Phone_Number":this.phoneNumber, "Email":this.email, "Gender":this.gender, "Image":this.picture, "Matric_Number":this.rand, "Date_of_Birth":this.dob}

this.students[this.id]=updatedStudent
console.log(this.students);

localStorage.setItem('registeredStudents', JSON.stringify(this.students))

  this.firstName='';
  this.lastName='';
  this.phoneNumber='';
  this.email='';
  this.gender='';
  this.rand='';
  this.dob='';
  this.file='';
  this.dialogRef.close()
  location.reload()
  }

  back=()=>{
  this.dialogRef.close()
  }
}
