import { Component, OnInit } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./_app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To Do List';

  toDos:Todo[];
inputTodo:string = "";

    constructor() { }
    ngOnInit(): void {
  
      this.toDos = [
        {
          content: 'Get Bread',
          completed: false
        },
        {
          content: 'Stream',
          completed: true
        }
      ]

  }

    toggleDone (id) {
        this.toDos.map((v,i) => {
          if (i == id) v.completed = !v.completed;

          return v;
        })
    }

    deleteTodo (id) {
      this.toDos = this.toDos.filter((v,i)  => i !== id)
    }

    addTodo () {
      this.toDos.push({
        content: this.inputTodo,
        completed: false
      });

        this.inputTodo = "";
    }
  }

