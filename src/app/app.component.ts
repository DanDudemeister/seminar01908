import { Component } from '@angular/core';
import {HelloWorldService} from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private helloWorldService: HelloWorldService;

  constructor(
    helloWorldService: HelloWorldService
  ) {
    this.helloWorldService = helloWorldService;
  }

  public handleHelloWorld(event: string): void {
    console.log('Received \'' + event + '\' from child-component');
  }
}
