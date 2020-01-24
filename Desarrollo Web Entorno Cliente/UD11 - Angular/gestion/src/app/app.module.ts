import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudentsComponent } from './students/students.component';
import { CyclesComponent } from './cycles/cycles.component';
import { StudentItemComponent } from './students/student-item/student-item.component';
import { CycleItemComponent } from './cycles/cycle-item/cycle-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StudentsComponent,
    CyclesComponent,
    StudentItemComponent,
    CycleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
