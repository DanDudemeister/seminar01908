import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {OverviewComponent} from './overview/overview.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { DataBindingsComponent } from './data-bindings/data-bindings.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
    declarations: [
        AppComponent,
        OverviewComponent,
        InterpolationComponent,
        DataBindingsComponent,
        StructuralDirectivesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdIconModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
