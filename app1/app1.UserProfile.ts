import { OnDestroy, Component, Input } from '@angular/core';
import { UserEmitter } from './app1.UserEmitter';
import { Body }  from './app1.Body';

@Component({
  selector: 'user-profile',
  template: '<div> \
    <ng-content></ng-content>\
    &nbsp;<span>{{user}}</span></div>'
})
export class UserProfile implements OnDestroy {
  user: String;

  constructor(protected userEmitter: UserEmitter) {
    var self = this;
    this.userEmitter.userUpdated.subscribe(
      (user) => {
        console.log("UserProfile got userUpdated event with: " + user);
        self.user = user;
      }
    );
    
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.userEmitter.userUpdated.unsubscribe();
  }

}