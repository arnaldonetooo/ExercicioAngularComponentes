import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputnumberComponent } from './inputnumber/inputnumber.component';
import { InputemailComponent } from './inputemail/inputemail.component';
import { InputdateComponent } from './inputdate/inputdate.component';
import { InputpasswordComponent } from './inputpassword/inputpassword.component';
import { InputbuttonComponent } from './inputbutton/inputbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    InputtextComponent,
    InputnumberComponent,
    InputemailComponent,
    InputdateComponent,
    InputpasswordComponent,
    InputbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
