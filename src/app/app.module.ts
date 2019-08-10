import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileDropDirective
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
