import { Component, ViewEncapsulation } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { UserEmitter } from './app1.UserEmitter';

/**
 * Wrapper for <body> content.
 * The root bootstrap component.
 */
@Component({
  selector: 'body',
  templateUrl: './app1/templates/app1.body.html',
  providers: [UserEmitter]
})

export class Body {
  dynamicHTMLContent: String = '<div>Probing <span style="color:navy;">dynamic</span> html content injection</div>';

  constructor(protected userEmitter: UserEmitter) {
    console.log("Body ctor");
  }
}