import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello-world2',
  templateUrl: './hello-world2.component.html',
  styleUrls: ['./hello-world2.component.css']
})
export class HelloWorld2Component implements OnInit {

  @Output() helloWorld: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.helloWorld.emit('Hello World!');
  }

}
