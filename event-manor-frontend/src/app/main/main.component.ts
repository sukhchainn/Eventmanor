import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Objects/task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

}
