import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudentsComponent } from './students/students.component';
import { CyclesComponent } from './cycles/cycles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StudentsComponent,
    CyclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
