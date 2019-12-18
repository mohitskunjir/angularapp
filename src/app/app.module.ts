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

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    TwowaybindingComponent,
    DirectivesComponent,
    CustomDirectiveDirective,
    PipeDemoComponent,
    CustomPipePipe
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
