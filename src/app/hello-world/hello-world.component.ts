import {Component, Input, OnInit} from '@angular/core';
import {HelloWorldService} from '../hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  providers: [HelloWorldService]
})
export class HelloWorldComponent implements OnInit {

  @Input() public hello: string;
  public name: string;
  public url: string;
  public inputValue: string;
  public showMe: boolean;
  public countries: string[];

  private helloWorldService: HelloWorldService;

  constructor(
    helloWorldService: HelloWorldService
  ) {
    this.helloWorldService = helloWorldService;
  }

  public ngOnInit(): void {
    this.name = 'world';
    this.url = 'https://www.fernuni-hagen.de/';
    this.inputValue = 'Change me!';
    this.showMe = true;
    this.countries = ['Germany', 'France', 'Spain', 'UK'];

    console.log('Value from parent is: ', this.hello);
  }

  public handleClick(): void {
    console.log('Button clicked!');
  }
}
