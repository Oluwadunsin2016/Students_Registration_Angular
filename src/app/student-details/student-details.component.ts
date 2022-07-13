import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

public details:any='';
public student:any='';
public status:any='';
public id:any=''




  constructor( public behaviour:TodoService, public dialog:MatDialog) { }

  ngOnInit(): void {

  
this.student=this.behaviour.data.subscribe((response)=>{
this.details=response
})
console.log(this.details);
  if (this.details={}) {
    this.status=false
  }else{
    this.status=true;
  }

this.behaviour.myStatus.subscribe((res)=>{
this.status=res
})
  }

  edit=()=>{
let dialogConfig= new MatDialogConfig()
dialogConfig.disableClose=true;
dialogConfig.autoFocus=true;

this.dialog.open(UpdateComponent,dialogConfig)

  
  }

  delete=()=>{
  this.id=JSON.parse(localStorage.getItem('myIndex'))
  console.log(this.id);
  let unwanted=confirm('Are you sure you want to delete this student?')
  if (unwanted) {
    let recovered=JSON.parse(localStorage.getItem('registeredStudents'))
 let filtered=recovered.filter((val:any, ind:any)=>ind!=this.id)
  console.log(filtered);
  localStorage.setItem('registeredStudents', JSON.stringify(filtered))
  location.reload()
  }
  }

cancel=()=>{
 this.status=false
}

}
