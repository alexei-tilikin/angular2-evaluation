import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';
import { UserEmitter } from './app1.UserEmitter';
import { Body }  from './app1.Body';

@Component({
  selector: 'user-name',
  template: '<input type="text" [(ngModel)]="name" (ngModelChange)="notifyNameChange()"/>'
})

export class UserNameInput{
  name: string

  constructor(protected userEmitter: UserEmitter) {

  }

  notifyNameChange() {
    console.log("UserNameInput notifyNameChange()");
     this.userEmitter.emit(this.name);
  }
}