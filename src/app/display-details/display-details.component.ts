import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit{
  users: any[] = [];
  user: any = {};
  bgColor: string = '';

  constructor(private api:ApiService){}
  ngOnInit(): void {
  this.getUser();
  }
  getUser() {
    this.api.AllUsers().subscribe((data: any) => {
    this.users = data.users;
    var index = Math.floor(Math.random() * this.users.length) + 1;
    this.user = this.users[index];
    this.bgColor = Math.floor(Math.random() * 16766215).toString(16);
    });
  }
  }
