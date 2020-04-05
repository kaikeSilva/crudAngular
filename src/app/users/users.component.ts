import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ResponseUsers } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers;

  //buscar o serviço no construtor
  constructor(private userService: UserService) { }


  ngOnInit(): void {
    //tornar acessivel ao html os dados vindos da api atribuindo eles a variavel
    this.userService.getUsers()
    .subscribe( res => this.responseUsers = res)
  }

}
