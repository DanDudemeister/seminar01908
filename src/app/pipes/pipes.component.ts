import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

    public country: string;
    public componentHtml: SafeHtml;
    public templateHtml: SafeHtml;

    constructor(private sanitized: DomSanitizer) {
    }

    ngOnInit() {
        this.country = 'Denmark';

        this.componentHtml = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-pipes',
                templateUrl: './pipes.component.html',
                styleUrls: ['./pipes.component.css']
            })
            export class PipesComponent implements OnInit {
            
                public country: string;
            
                constructor() {}
            
                ngOnInit() {
                    this.country = 'Denmark';
                }
            }
        `);

        this.templateHtml = this.sanitized.bypassSecurityTrustHtml(`
            &lt;div&gt;{{ country | uppercase }}&lt;/div&gt;
        `);
    }

}
