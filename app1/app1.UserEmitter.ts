import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UserEmitter {
  @Output() userUpdated = new EventEmitter();
  constructor() {
    console.log("UserEmitter ctor");
  }

    emit(user) {
      // Handle the event
      console.log("UserEmitter emit: " + user);
      this.userUpdated.emit(user);
    }

}