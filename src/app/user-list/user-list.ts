import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from '../user/user';

@Component({
  imports: [User],
  selector: 'app-user-list',
  styleUrl: './user-list.css',
  templateUrl: './user-list.html',
})
export class UserList {
  users = DUMMY_USERS;
  
  onSelectedUserChanged(id: string){
    console.log("Changed " + id)
  }
}
