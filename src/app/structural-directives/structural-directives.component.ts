import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-structural-directives',
    templateUrl: './structural-directives.component.html',
    styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

    public showMe: boolean;
    public countries: string[];
    public componentHtmlIf: SafeHtml;
    public templateHtmlIf: SafeHtml;
    public componentHtmlFor: SafeHtml;
    public templateHtmlFor: SafeHtml;

    constructor(private sanitized: DomSanitizer) {}

    ngOnInit() {
        this.showMe = true;
        this.countries = ['Denmark', 'Germany', 'Italy', 'Spain'];

        this.componentHtmlIf = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-ng-if',
                templateUrl: './ng-if.component.html',
                styleUrls: ['./ng-if.component.css']
            })
            export class NgIfComponent implements OnInit {
            
                public showMe: boolean;
            
                constructor() {}
            
                ngOnInit() {
                    this.showMe = true;
                }
            
                public toggleVisibility(): void {
                    this.showMe = !this.showMe;
                }
            }
        `);

        this.templateHtmlIf = this.sanitized.bypassSecurityTrustHtml(`
            &lt;div *ngIf="showMe"&gt;Visible?&lt;/div&gt;
            &lt;button (click)="toggleVisibility()"&gt;Toggle Visibility&lt;/button&gt;
        `);

        this.componentHtmlFor = this.sanitized.bypassSecurityTrustHtml(`
            import {Component, OnInit} from '@angular/core';

            @Component({
                selector: 'app-ng-for',
                templateUrl: './ng-for.component.html',
                styleUrls: ['./ng-for.component.css']
            })
            export class NgForComponent implements OnInit {
            
                public countries: string[];
            
                constructor() {}
            
                ngOnInit() {
                    this.countries =
                        ['Denmark', 'Germany', 'Italy', 'Spain'];
                }
            }
        `);

        this.templateHtmlFor = this.sanitized.bypassSecurityTrustHtml(`
            &lt;ul&gt;
                &lt;li *ngFor="let country of countries"&gt;{{ country }}&lt;/li&gt;
            &lt;/ul&gt;
        `);
    }

    public toggleVisibility(): void {
        this.showMe = !this.showMe;
    }
}
