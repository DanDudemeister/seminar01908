import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

    public property: string;
    public componentHtml: SafeHtml;
    public templateHtml: SafeHtml;

    constructor(private sanitized: DomSanitizer) {
        this.property = 'interpolation';

        this.componentHtml = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';
            import {DomSanitizer} from "@angular/platform-browser";
            
            @Component({
                selector: 'app-interpolation',
                templateUrl: './interpolation.component.html',
                styleUrls: ['./interpolation.component.css']
            })
            export class InterpolationComponent implements OnInit {
            
                public property: string;
            
                constructor() {
                    this.property = 'interpolation';
                }
            
                ngOnInit() {}
            }
        `);

        this.templateHtml = this.sanitized.bypassSecurityTrustHtml(`
            &lt;p&gt;
                {{ property }} works!
            &lt;/p&gt;
        `);
    }

    ngOnInit() {}
}
