import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHelloWorld]'
})
export class HelloWorldDirective {

  @HostBinding('attr.value') helloWorld: string = 'Hello World!';

  constructor() { }

}
