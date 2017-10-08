import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdMenuModule, MdToolbarModule, MdIconModule} from '@angular/material';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import {HelloWorldService} from './hello-world.service';
import { HelloWorldDirective } from './directives/hello-world.directive';
import { HelloWorld2Component } from './output-binding/hello-world2/hello-world2.component';
import { RemoveSpacesPipe } from './pipes/remove-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldDirective,
    HelloWorld2Component,
    RemoveSpacesPipe
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
    FormsModule
  ],
  providers: [HelloWorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
