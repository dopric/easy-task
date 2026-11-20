import { Component, Input, EventEmitter, input, Output } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})

export class User {
 
  @Input({required: true}) avatar: string = '';
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;

  @Output() selectedUserChanged= new EventEmitter<string>();

  get imagePath(){
    return "users/" + this.avatar;
  }
  onSelectUser(){
    this.selectedUserChanged.emit(this.id);
  }
}
