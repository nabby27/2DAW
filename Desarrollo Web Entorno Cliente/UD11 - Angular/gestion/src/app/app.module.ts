import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StudentsComponent } from './students/students.component';
import { CyclesComponent } from './cycles/cycles.component';
import { StudentItemComponent } from './students/student-item/student-item.component';
import { CycleItemComponent } from './cycles/cycle-item/cycle-item.component';
import { StudentsService } from './services/students.service';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StudentsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
