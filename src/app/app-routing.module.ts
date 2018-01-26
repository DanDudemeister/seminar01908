import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewComponent} from "./overview/overview.component";
import {InterpolationComponent} from "./interpolation/interpolation.component";
import {DataBindingsComponent} from './data-bindings/data-bindings.component';

const routes: Routes = [
    {path: '', redirectTo: '/overview', pathMatch: 'full'},
    {path: 'overview', component: OverviewComponent},
    {path: 'interpolation', component: InterpolationComponent},
    {path: 'data-bindings', component: DataBindingsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
