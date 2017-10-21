import {RouterModule, Routes} from '@angular/router';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {HelloWorld2Component} from './output-binding/hello-world2/hello-world2.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'first', component: HelloWorldComponent },
  { path: 'second', component: HelloWorld2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
