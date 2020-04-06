import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserPost , UserPostResponse } from "../user.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  request: UserPost = {
    name: '',
    job: ''
  }

  response: UserPostResponse; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //salvar usuário e guardar a resposta para mostrar na tela
  save() {
    this.userService.createUser(this.request).subscribe(
      res => {
        this.response = res;
        console.log(this.response)
      });
  }
}
