import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  public name: string;
  public url: string;
  public inputValue: string;

  constructor() { }

  public ngOnInit(): void {
    this.name = 'world';
    this.url = 'https://www.fernuni-hagen.de/';
    this.inputValue = 'Change me!';
  }

  public handleClick(): void {
    console.log('Button clicked!');
  }
}
