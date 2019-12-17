import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertybindingComponent,
    TwowaybindingComponent
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
