import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-data-bindings',
    templateUrl: './data-bindings.component.html',
    styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent implements OnInit {

    public urlFromComponent: string;
    public inputValue: string;
    public componentHtmlPropertyBinding: SafeHtml;
    public templateHtmlPropertyBinding: SafeHtml;
    public componentHtmlEventBinding: SafeHtml;
    public templateHtmlEventBinding: SafeHtml;
    public componentHtmlTwoWayBinding: SafeHtml;
    public templateHtmlTwoWayBinding: SafeHtml;

    constructor(private sanitized: DomSanitizer) {
        this.urlFromComponent = 'overview';

        this.componentHtmlPropertyBinding = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-property-binding',
                templateUrl: './property-binding.component.html',
                styleUrls: ['./property-binding.component.css']
            })
            export class PropertyBindingComponent implements OnInit {
            
                public urlFromComponent: string;
            
                constructor() {}
            
                ngOnInit() {
                    this.urlFromComponent = 'overview';
                }
            }
        `);

        this.templateHtmlPropertyBinding = this.sanitized.bypassSecurityTrustHtml(`
            &lt;a [href]="urlFromComponent"&gt;Link with URL from a component&lt;/a&gt;
        `);

        this.componentHtmlEventBinding = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-event-binding',
                templateUrl: './event-binding.component.html',
                styleUrls: ['./event-binding.component.css']
            })
            export class EventBindingComponent implements OnInit {
            
                constructor() {}
            
                ngOnInit() {}
                
                public clickHandlerFromComponent(): void {
                    alert('Hello!');
                }
            }
        `);

        this.templateHtmlEventBinding = this.sanitized.bypassSecurityTrustHtml(`
            &lt;button (click)="clickHandlerFromComponent()"&gt;
                A button with a click-handler
            &lt;/button&gt;
        `);

        this.componentHtmlTwoWayBinding = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-two-way-binding',
                templateUrl: './two-way-binding.component.html',
                styleUrls: ['./two-way-binding.component.css']
            })
            export class TwoWayBindingComponent implements OnInit {
            
                public inputValue: string;
            
                constructor() {}
            
                ngOnInit() {}
            }
        `);

        this.templateHtmlTwoWayBinding = this.sanitized.bypassSecurityTrustHtml(`
            &lt;input [(ngModel)]="inputValue" type="text"&gt;
            &lt;div&gt;{{ inputValue }}&lt;/div&gt;
        `);
    }

    ngOnInit() {
    }

    public clickHandlerFromComponent(): void {
        alert('Hello!');
    }
}
