import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirective } from './color.directive';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    RegistrationFormComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
