import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addCredentials } from './store/actions/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'yalpsemag';

  userCreds$: Observable<any>

  constructor(private store: Store<{username: string, role: string}>) {
      this.userCreds$ = this.store.pipe(select('userInfo'))
  }

  runReducer() {
     this.store.dispatch(addCredentials({
         username: 'farts',
         role: 'derp'
     }));
  }
}
