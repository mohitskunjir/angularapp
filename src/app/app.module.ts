import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Child1Component } from './child1/child1.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    TwowaybindingComponent,
    DirectivesComponent,
    CustomDirectiveDirective,
    PipeDemoComponent,
    CustomPipePipe,
    Parent1Component,
    Parent2Component,
    Child2Component,
    Child1Component,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
