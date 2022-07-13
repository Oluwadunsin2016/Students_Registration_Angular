import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.css']
})
export class ListOfStudentsComponent implements OnInit {

  constructor(public behaviour:TodoService) { }

  public students:any=[]
  public status:any=true

  ngOnInit(): void {
  this.students=JSON.parse(localStorage.getItem('registeredStudents'))
  }

view(i:any){
   localStorage.setItem('myIndex', i);
   let contain= this.students.find((val:any,ind:any)=>ind===i);
   this.behaviour.data.next(contain)
   this.behaviour.myStatus.next(this.status)

  }

}
