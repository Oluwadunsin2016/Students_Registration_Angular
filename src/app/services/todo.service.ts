import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(public Client: HttpClient) {}

  getUsers() {
    return this.Client.get('https://jsonplaceholder.typicode.com/users');
  }

  getTodos() {
    return this.Client.get('https://jsonplaceholder.typicode.com/todos');
  }

  public data= new BehaviorSubject<any>({})
  public myStatus= new BehaviorSubject<boolean>(false)
}
