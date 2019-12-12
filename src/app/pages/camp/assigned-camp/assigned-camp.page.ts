import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigned-camp',
  templateUrl: './assigned-camp.page.html',
  styleUrls: ['./assigned-camp.page.scss'],
})
export class AssignedCampPage implements OnInit {

  public appPages = [

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
