import {Component, Input, OnInit} from '@angular/core';
import {HelloWorldService} from '../hello-world.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

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
  public helloWorld: string;

  private helloWorldService: HelloWorldService;
  private http: Http;

  constructor(
    helloWorldService: HelloWorldService,
    http: Http
  ) {
    this.helloWorldService = helloWorldService;
    this.http = http;
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

    // this.http.get('/helloworld')
    //   .map(response => response.json())
    //   .subscribe(mappedResponse => console.log('Received response \'' + mappedResponse + '\' from server!'));
  }
}
