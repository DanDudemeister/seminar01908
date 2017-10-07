import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() {
    console.log('HelloWorldService instantiated!');
  }

  public getHelloWorld(): string {
    return 'Hello World!';
  }
}
