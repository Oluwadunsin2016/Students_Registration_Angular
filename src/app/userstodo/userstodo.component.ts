import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-userstodo',
  templateUrl: './userstodo.component.html',
  styleUrls: ['./userstodo.component.css']
})
export class UserstodoComponent implements OnInit {

  constructor(public todoservice:TodoService, public actRoute:ActivatedRoute) { }


  // public todosArray:any=[];
  public Todos:any=[];

  ngOnInit(): void {
  let user_Id=this.actRoute.snapshot.params['id']
  console.log(user_Id);
  
this.todoservice.getTodos().subscribe((data)=>{
let todosArray:any=data
console.log(todosArray);

this.Todos=todosArray.filter((todo)=>todo.userId==user_Id)
console.log(this.Todos);
})
  }

}
