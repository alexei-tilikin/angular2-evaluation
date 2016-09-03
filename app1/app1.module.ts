import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Body } from './app1.Body';
import { UserProfile }  from './app1.UserProfile';
import { UserNameInput }  from './app1.UserNameInput';
import { DynamicDirective }  from './app1.DynamicDirective';
import { HtmlContent }  from './app1.HtmlContent';

@NgModule({
  // providers: [UserEmitter], //global singleton providers
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ Body, UserProfile, UserNameInput, HtmlContent, DynamicDirective],
  bootstrap:    [ Body ] //only for bootstrapped modules, indicates root component to begin the bootstrap with
})
export class AppModule { }